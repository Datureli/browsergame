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
      <router-link to="/character">
        <button
          :disabled="!isActiveLink"
          :class="isActiveLink ? 'activeStatus' : ''"
          @click="validateNickname"
          type="submit"
        >
          Continue
        </button>
        {{ nickname.value.length }}
      </router-link>
      <div class="error" v-if="validateNickname">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useNickname } from "../composables/useNickname";
import { useNameGenerator } from "../composables/useNameGenerator";

let { nickname, error, saveNickname, clearNickname } = useNickname();
let { generatedName, generateName, addCustomName } = useNameGenerator();
let activeLink = ref(false);

let isRandomName = computed(() => {
  return (nickname.value = generatedName);
});

const validateNickname = () => {
  if (nickname.value !== null) {
    error.value =
      nickname.value.length < 5
        ? ""
        : "To nie Gothic, musisz wybrać jakieś imię!";
  }
};

let isActiveLink = computed((even) => {
  return generatedName.value.length < 5
    ? (activeLink.value = false)
    : (activeLink.value = true);
});

const handleSubmit = (event) => {
  validateNickname();
  if (error.value === "") {
    saveNickname(nickname);
  }
  event.preventDefault();
};
</script>

<style scoped>
input {
  height: 60px;
  font-size: 2rem;
  margin: 1rem;
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
