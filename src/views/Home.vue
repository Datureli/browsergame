<template>
  <div>
    <h1>Welcome</h1>
    <p>What is your name?</p>
    <div class="buttonGroup">
      <button @click="generateName">losowe</button>

      <label for="name">
        <input
          type="text"
          placeholder="your nickname"
          v-model="isRandomName.value"
          @keyup="error"
        />
      </label>
      <button type="submit">
        <router-link class="activeStatus" v-if="isActive" to="/character"
          >Continue</router-link
        >
        <span v-else>Continue</span>
      </button>
      <div class="error" v-if="error">
        {{ error }}
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useNickname } from "../composables/useNickname";
import { useNameGenerator } from "../composables/useNameGenerator";
export default {
  setup() {
    let { nickname, isActive, error } = useNickname();
    let { generatedName, customName, generateName, addCustomName } =
      useNameGenerator();
    let isRandomName = computed(() => {
      return (nickname.value = generatedName);
    });

    return {
      isRandomName,
      nickname,
      isActive,
      error,
      generatedName,
      customName,
      generateName,
      addCustomName,
    };
  },
};
</script>

<style>
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
