<template>
  <div>
    <h1>Welcome to your dashboard {{ nickname }}</h1>
  </div>
</template>

<script setup>
import { useNickname } from "../composables/useNickname";
import { defineProps } from 'vue';

const props = defineProps({
  modelValue: String,
});

let { nickname } = useNickname();
</script>
