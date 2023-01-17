<template>
  <div class="characterContainer">
    <h2>Choose your Character {{ nickname }}</h2>

    <div>
      <div
        v-for="characterClass in characterClass"
        :key="characterClass.name"
        class="text-h3 justify-center q-pa-lg row inline q-gutter-md q-mx-auto"
      >
        <q-card
          height="300"
          v-model="selectedClass"
          :value="selectedClass.name"
          @click="toggleClass"
          :class="{ cardBorder: isToggled}"
          class="my-card"
        >
          {{ characterClass.name }}
          <img height="300" :src="characterClass.image" alt="avatar" />
        </q-card>
      </div>
    </div>
    {{ characterClass.image }}

    <button class="continueButton" :disabled="disableButton">
      <router-link class="activeStatus" to="/sex">Continue</router-link>
    </button>
    <input type="text" v-model="characterClass.name" />
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useNickname } from "../composables/useNickname";

const selectedClass = reactive([]);
let isToggled = ref(false);
const isDisabled = ref(false);

function toggleClass(event) {
  event.target.classList.toggle('cardBorder')
}
const disableButton = () => {
  if (isToggled) {
    isDisabled = true;
  }
};
const selectedClassName = () => {
  selectedClass.push(characterClass);
};
let characterClass = ref([
  {
    name: "Paladin",
    image: new URL("/src/assets/img/paladin.jpg", import.meta.url),
  },
  {
    name: "Mage",
    image: new URL("/src/assets/img/mage.jpg", import.meta.url),
  },
  {
    name: "Rouge",
    image: new URL("/src/assets/img/rouge.png", import.meta.url),
  },
  {
    name: "Warrior",
    image: new URL("/src/assets/img/knight.png", import.meta.url),
  },
]);
let { nickname } = useNickname();
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
  border: 12px solid green

.cardBorder2
  border: none

.my-card
  width: 230px
  height: 300px
  max-width: 250px

.my-card:hover
  transform: scale(1.1)
  transition: 0.5s
  cursor: pointer

a
   color: black
   text-decoration: none
</style>
