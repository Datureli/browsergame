import { ref, computed } from "vue";
let nickname = ref(null);

export function useNickname() {
  const error = computed(() => {
    return nickname.value === "" ? "The nickname is required" : "";
  });

  const nicknameLength = computed(() => {
    if (nickname.value) {
      return nickname.value.length;
    }
    return "";
  });
  const calculateOffSet = computed(() => {
    return nicknameLength.value * 10;
  });

  return {
    nickname,
    error,
    nicknameLength,
    calculateOffSet,
  };
}
