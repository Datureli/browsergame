import { ref, Ref, onMounted } from "vue";

let nickname: Ref<string> = ref("");
const error: Ref<string> = ref("");

export function useNickname() {
  // Sprawdź czy są zapisane dane w localStorage przy montowaniu komponentu
  onMounted(() => {
    const savedNickname = localStorage.getItem("nickname");
    if (savedNickname) {
      nickname.value = savedNickname;
    }
  });

  // Zapisz nickname do localStorage
  const saveNickname = () => {
    if (nickname.value !== null) {
      localStorage.setItem("nickname", nickname.value);
    }
  };

  // Wyczyść nickname z localStorage
  const clearNickname = () => {
    nickname.value = "";
    localStorage.removeItem("nickname");
  };

  return {
    nickname,
    error,
    saveNickname,
    clearNickname,
  };
}
