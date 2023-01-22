<template>
  <div class="characterContainer">
    <h2>Choose your Character {{ nickname }}</h2>

    <div>
      <div
       
        class="text-h3 justify-center q-pa-lg row inline q-gutter-md q-mx-auto"
      >
      
        <q-card
         v-for="(characterClass,index) in characterClass"
        :key="index"
          height="350"
          @click="toggleClass(index)"
          class=" my-card"
          :class="{ cardBorder: index === activeIndex }"
        >
          <p class="characterName" style="position: absolute">
            {{ characterClass.name }}
          </p>
          <img height="350" :src="characterClass.image" alt="avatar" />
        </q-card>
      </div>
    </div>
    <button class="continueButton" :disabled="!isToggled">
      <router-link class="activeStatus" to="/sex">Continue</router-link>
    </button>
    <input type="text" v-model="characterClass.name" />
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useNickname } from "../composables/useNickname";

let isToggled = ref(false);
const isDisabled = ref(false);
let activeIndex = ref(null);

function toggleClass(index) {
  //isToggled.value = !isToggled.value;
 activeIndex.value = index
}

let characterClass = reactive([
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
  border: 5px solid green

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

.my-card:hover
  transform: scale(1.1)
  transition: 0.5s
  cursor: pointer

a
   color: black
   text-decoration: none
</style>
