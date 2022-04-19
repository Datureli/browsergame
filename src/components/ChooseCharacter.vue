<template>
<div>
<h1>Choose your Character {{nickname}} </h1>
 <q-card class="my-card">
      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>

    <p>Paladin</p>
    <p>Mage</p>
    <p>Rouge</p>
    <p>Warrior</p>
</div>

</template>

<script>
import { useNickname } from "../composables/useNickname";
export default {
  props: {
    modelValue: String,
  },
  setup() {
     let { nickname } = useNickname()
    return {
      nickname
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
  color: $dark
</style>