import { ref, Ref, onMounted } from "vue";

let nickname: Ref<string | null> = ref(null);
const error: Ref<string> = ref("");

export function useNickname() {
  // Sprawdź czy są zapisane dane w localStorage przy montowaniu komponentu
  onMounted(() => {
    const savedNickname = localStorage.getItem("nickname");
    if (savedNickname) {
      nickname.value = savedNickname;
    }
  });

  const validateNickname = () => {
    if (nickname.value !== null) {
      error.value =
        nickname.value.length < 5
          ? ""
          : "To nie Gothic, musisz wybrać jakieś imię!";
    }
  };

  // Zapisz nickname do localStorage
  const saveNickname = () => {
    if (nickname.value !== null) {
      localStorage.setItem("nickname", nickname.value);
    }
  };

  // Wyczyść nickname z localStorage
  const clearNickname = () => {
    nickname.value = null;
    localStorage.removeItem("nickname");
  };

  return {
    nickname,
    error,
    validateNickname,
    saveNickname,
    clearNickname,
  };
}
