<template>
  <div class="characterContainer">
    <h2>Choose your Character {{ nickname.value }}</h2>

    <div class="cards">
      <div
        v-for="(characterClasses, index) in characterClasses"
        :key="index"
        class="my-card"
        :class="{ cardBorder: index === activeIndex }"
        @click="toggleClass(index)"
      >
        <p class="characterName">
          {{ characterClasses.name }}
        </p>
        <img width="250" height="298" :src="characterClasses.image" alt="avatar" />
      </div>
    </div>
    <button class="continueButton" :disabled="!isToggled">
      <router-link class="activeStatus" to="/sex">Continue</router-link>
    </button>
    <input type="text" v-model="characterClasses.name" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useNickname } from "../composables/useNickname";
import { useCharacterClass } from "../composables/useCharacterClass";

let { nickname } = useNickname();
let { characterClasses } = useCharacterClass();

let isToggled = ref(false);
let activeIndex = ref(null);

function toggleClass(index) {
  isToggled.value = true;
  activeIndex.value = index;
}
</script>

<style scoped>
.characterContainer {
  display: grid;
  height: 80vh;
}

.continueButton {
  width: 200px;
  margin: 5rem auto;
}

.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.cardBorder {
  transform: scale(1.1);
}

.my-card {
  width: 230px;
  height: 300px;
  max-width: 250px;
  margin: 1rem;
  cursor: pointer;
  transition: 0.5s;
  position: relative;
}

.my-card:hover {
  transform: scale(1.1);
}

.characterName {
  color: white;
  font-size: 26px;
  padding-right: 0.6rem;
  text-align: right;
  justify-content: right;
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 10px;
  right: 10px;
}

a {
  color: black;
  text-decoration: none;
}
</style>
