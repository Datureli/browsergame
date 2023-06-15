import { ref, computed } from "vue";
let nickname = ref("null");
const error = ref("");

export function useNickname() {
  const validateNickname = () => {
    if (nickname.value !== null) {
      error.value =
        nickname.value.length < 5
          ? "dsadsas"
          : "To nie Gothic, musisz wybrać jakieś imię!";
    }
  };
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
    validateNickname,
    nicknameLength,
    calculateOffSet,
  };
}
