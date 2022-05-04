<template>
  <div>
    <h2>Choose your Character {{ nickname }}</h2>

    <div class="text-h3 justify-center q-pa-lg row q-gutter-md q-mx-auto">
      <router-link to="/sex">
        <q-card class="my-card">
          <q-card-section><p>Paladin</p> </q-card-section>
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
import { useNickname } from "../composables/useNickname";
export default {
  setup() {
    const classess = [
      {
        className: "Paladin",
      },
    ];
    let { nickname } = useNickname();
    return {
      nickname,
      classess,
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
   text-decoration: none 
</style>
