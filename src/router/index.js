import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
    },
    {
      name: "UserInterface",
      path: "/userinterface",
      component: () => import("../components/UserInterface.vue"),
    },
    {
      name: "ChooseCharacter",
      path: "/character",
      component: () => import("../components/ChooseCharacter.vue"),
    },
    {
      name: "Sex",
      path: "/sex",
      component: () => import("../components/SexSelect.vue"),
    },
  ],
});
export default router;
