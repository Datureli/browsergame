<template>
  <div>
    <h2>Choose your Character {{ nickname }}</h2>

    <div
      class="text-h3 justify-center q-pa-lg row inline q-gutter-md q-mx-auto"
    >
      <q-card v-for="characterClass in characterClass" :key="characterClass.id" class="my-card">
             <router-link class="activeStatus" to="/sex"
          >Continue</router-link
        >
        <q-card-section>
          {{ characterClass.name }}
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useNickname } from "../composables/useNickname";
export default {
  setup() {
    let characterClass = ref([
      {
        name: "Paladin",
      },
      {
        name: "Mage",
      },
      {
        name: "Rouge",
      },
      {
        name: "Warrior",
      },
    ]);
    let { nickname } = useNickname();
    return {
      nickname,
      characterClass,
    };
  },
};
</script>

<style lang="sass" scoped>

.cards
  display: flex

.my-card
  width: 230px
  height: 300px
  max-width: 250px
  border: 2px solid $primary

.my-card:hover
  transform: scale(1.1)
  transition: 0.5s
  cursor: pointer

a
   color: black
   text-decoration: none
</style>
