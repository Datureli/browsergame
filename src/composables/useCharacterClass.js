import { reactive } from "vue";

export function useCharacterClass() {
  let characterClasses = reactive([
    {
      name: "Paladin",
      image: "/src/assets/img/paladin.jpg",
    },
    {
      name: "Mage",
      image: "/src/assets/img/mage.jpg",
    },
    {
      name: "Rogue",
      image: "/src/assets/img/rouge.png",
    },
    {
      name: "Warrior",
      image: "/src/assets/img/knight.png",
    },
  ]);

  return {
    characterClasses,
  };
}
