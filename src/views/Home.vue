<template>
  <div>
    <h1>Welcome</h1>
    <div class="buttonGroup">
      <label for="nickname">
        <input
          type="text"
          style="padding-left: 5px"
          placeholder="Nickname"
          v-model="isRandomName.value"
          @keyup="error"
          @input="handleInput"
          id="nicknameInput"
        />
      </label>
      <div>
        <router-link to="/character">
          <button
            :disabled="!isActiveLink"
            :class="isActiveLink ? 'activeStatus' : ''"
            @click="validateNickname"
          >
            Continue
          </button>
        </router-link>
        <div class="error" v-if="error">
          {{ error }}
        </div>
        <button @click="generateName">Random</button>
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
  if (typeof nickname.value === "string") {
    const trimmedNickname = nickname.value.trim();
    error.value =
      trimmedNickname.length >= 5 &&
      trimmedNickname.length <= 20 &&
      !/^\s*$/.test(trimmedNickname)
        ? ""
        : "To nie Gothic, musisz wybrać jakieś imię o długości od 5 do 20 znaków!";
  }
};
let isActiveLink = computed(() => {
  return (
    generatedName.value.trim().length >= 5 &&
    generatedName.value.trim().length <= 20
  );
});

const handleInput = () => {
  generatedName.value = generatedName.value.replace(
    /[!@#$%^&*(),.?":{}|<>]/g,
    ""
  );

  validateNickname();
};

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
