import { ref } from "vue";

export function useNameGenerator() {
  const generatedName = ref("");

  const generateName = () => {
    const randomNames = [
      "Zygfrid",
      "Aragorn",
      "Daro lew",
      "Maria",
      "Piotr",
      "Katarzyna",
    ];
    const randomIndex = Math.floor(Math.random() * randomNames.length);
    generatedName.value = randomNames[randomIndex];
  };

  return {
    generatedName,
    generateName,
  };
}
