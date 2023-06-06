import { ref } from 'vue';
import { useNickname } from "./useNickname";
let { nickname } = useNickname();

export function useNameGenerator() {
  const generatedName = ref('');
  const customName = ref('');

  const generateName = () => {
    const randomNames = ['Jan', 'Anna', 'Tomasz', 'Maria', 'Piotr', 'Katarzyna'];
    const randomIndex = Math.floor(Math.random() * randomNames.length);
    generatedName.value = randomNames[randomIndex];
  };

  const addCustomName = () => {
    if (nickname.value !== '') {
      generatedName.value = nickname.value;
      nickname.value = '';
    }
  };

  return {
    generatedName,
    customName,
    generateName,
    addCustomName
  };
  }