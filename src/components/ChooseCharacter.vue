<template>
<div>
<h1>Choose your Character {{nickname}} </h1>
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