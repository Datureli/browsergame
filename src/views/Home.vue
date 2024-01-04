<template>
  <div>
    <h1>Welcome</h1>
    <div class="buttonGroup">
      <button @click="generateName">losowe</button>

      <label for="name">
        <input
          type="text"
          placeholder="Nickname"
          v-model="isRandomName.value"
          @keyup="error"
        />
      </label>
      <button @click="handleSubmit" type="submit" :disabled="isLoading">
        <router-link class="activeStatus" v-if="isActiveLink" to="/character"
          >Continue</router-link
        >
        <span v-else>Continue</span>
      </button>
      <div class="error" v-if="!isLoading && error && generatedName.value">
        {{ error }}
      </div>
    </div>
    <div></div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useNickname } from "../composables/useNickname";
import { useNameGenerator } from "../composables/useNameGenerator";

let { nickname, error, validateNickname, saveNickname, clearNickname } = useNickname();
let { generatedName, generateName, addCustomName } = useNameGenerator();
let activeLink = ref(false);
let isLoading = ref(false);

let isRandomName = computed(() => {
  return (nickname.value = generatedName);
});

let isActiveLink = computed(() => {
  return generatedName.value.length < 5
    ? (activeLink.value = false)
    : (activeLink.value = true);
});

const handleSubmit = () => {
  isLoading.value = true;
  validateNickname();
  if (error.value === "") {
    saveNickname(nickname);
  }
  isLoading.value = false;
};
</script>

<style scoped>
input {
  height: 60px;
  font-size: 2rem;
  margin: 1rem;
}
.buttongroup {
  width: 300px;
  display: grid;
  margin: auto;
}
.error {
  margin-top: 5px;
  color: #ff0000;
}
.activeStatus {
  text-decoration: none;
  color: #008000;
}
</style>
