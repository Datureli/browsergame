<template>
  <div>
    <h2>Choose your Character {{ nickname }}</h2>
    <div class="justify-center q-pa-lg row q-gutter-md q-mx-auto ">
      <q-card class="my-card ">
        <q-card-section>
          <p>Paladin</p>
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <q-card-section>
          <p>Mage</p>
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <q-card-section>
          <p>Rouge</p>
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <q-card-section>
          <p>Warrior</p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { useNickname } from "../composables/useNickname";
export default {
  setup() {
    let { nickname } = useNickname();
    return {
      nickname,
    };
  },
};
</script>

<style lang="sass" scoped>

.my-card
  width: 100%
  height: 300px
  max-width: 250px
  color: $info
.my-card:hover
  transform: scale(1.1)
  transition: 0.5s
  cursor: pointer
</style>
