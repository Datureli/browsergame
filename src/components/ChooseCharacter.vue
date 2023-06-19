<template>
  <div class="characterContainer">
    <h2>Choose your Character {{ nickname }}</h2>

    <div>
      <div
        class="text-h3 justify-center q-pa-lg row inline q-gutter-md q-mx-auto"
      >
        <q-card
          v-for="(characterClasses, index) in characterClasses"
          :key="index"
          height="350"
          @click="toggleClass(index)"
          class="my-card"
          :class="{ cardBorder: index === activeIndex }"
        >
          <p class="characterName" style="position: absolute">
            {{ characterClasses.name }}
          </p>
          <img height="298" :src="characterClasses.image" alt="avatar" />
        </q-card>
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
import { useCharacterClass } from "../composables/useCharacterClass"

let { nickname } = useNickname();
let { characterClasses } = useCharacterClass();

let isToggled = ref(false);
let activeIndex = ref(null);

function toggleClass(index) {
  isToggled.value = true;
  activeIndex.value = index;
}

</script>

<style lang="sass" scoped>

.characterContainer
  display: grid
  height: 80vh

.continueButton
  width: 200px
  margin: 5rem auto

.cards
  display: flex

.cardBorder
  transform: scale(1.1)

.characterName
  color: black
  font-size: 26px
  padding-right: 0.6rem
  text-align: right
  justify-content: right
  display: flex
  width: 100%

.my-card
  width: 230px
  height: 300px
  max-width: 250px
  margin: 1rem

.my-card:hover
  transform: scale(1.1)
  transition: 0.5s
  cursor: pointer

a
   color: black
   text-decoration: none
</style>
