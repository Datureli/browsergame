<template>
  <div>
    <h2>Choose your Character {{ nickname }}</h2>

    <div class="text-h3 justify-center q-pa-lg row q-gutter-md q-mx-auto">
      <router-link to="/sex">
        <q-card v-for="classess1 in classess1" :key="classess1" class="my-card">
          
          <q-card-section><p>{{classess1.name}}</p> </q-card-section>
        </q-card>
      </router-link>

   <router-link to="/sex">
        <q-card class="my-card">
          <q-card-section><p>Mage</p> </q-card-section>
        </q-card>
      </router-link>
   <router-link to="/sex">
        <q-card class="my-card">
          <q-card-section><p>Rouge</p> </q-card-section>
        </q-card>
      </router-link>
       <router-link to="/sex">
        <q-card class="my-card">
          <q-card-section><p>Warrior</p> </q-card-section>
        </q-card>
      </router-link>
    </div>
  </div>
</template>

<script>
import  { ref } from 'vue'
import { useNickname } from "../composables/useNickname";
export default {
  setup() {
    let classess1 = ref([
      {
        name: "Paladin",
      },
         {
        name: "Paladin",
      },
    ])
    let { nickname } = useNickname();
    return {
      nickname,
      classess1,
    };
  },
};
</script>

<style lang="sass" scoped>

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
