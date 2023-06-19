import { ref, Ref } from "vue";

let nickname: Ref<string | null> = ref(null);
const error: Ref<string> = ref("");

export function useNickname() {
  const validateNickname = () => {
    if (nickname.value !== null) {
      error.value =
        nickname.value.length < 5
          ? ""
          : "To nie Gothic, musisz wybrać jakieś imię!";
    }
  };

  return {
    nickname,
    error,
    validateNickname,
  };
}
