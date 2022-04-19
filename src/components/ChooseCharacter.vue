<template>
<div>
<h1>Choose your Character {{nickname}} </h1>

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