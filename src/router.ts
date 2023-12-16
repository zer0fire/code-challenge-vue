import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage/index.vue";
import Chart from "./components/Chart/index.vue";
import DragList from "./components/DragList/index.vue";
import AppVue from "./App.vue";

const routes = [
  { path: "/", name: "app", component: AppVue },
  { path: "/home", name: "home", component: HomePage },
  { path: "/chart", name: "chart", component: Chart },
  { path: "/drag", name: "drag", component: DragList },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
