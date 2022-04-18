<template>
  <div>
    <h1>Welcome</h1>
    <p>What is your name?</p>
    <div class="buttonGroup">
      <label for="name">
        <input
          type="text"
          placeholder="your nickname"
          v-model="nickname"
          @keyup="error"
        />
      </label>
      <button type="submit">
        <router-link class="activeStatus" v-if="isActive" to="/userinterface"
          >Continue</router-link
        >
        <span v-else>Continue</span>
      </button>
      <div class="error" v-if="error">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import { useNickname } from "../composables/useNickname";
export default {
  setup() {
    let { nickname, isActive, error } = useNickname();

    return {
      nickname,
      isActive,
      error,
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
