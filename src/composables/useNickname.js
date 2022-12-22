import { ref, computed } from "vue";
let nickname = ref(null);
let activeLink = ref(false);
export function useNickname() {
  const isActive = computed(() => {
    return nickname.value === null
      ? (activeLink = false)
      : nickname.value === ""
      ? (activeLink = false)
      : (activeLink = true);
  });

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
    activeLink,
    isActive,
    error,
    nicknameLength,
    calculateOffSet,
  };
}
