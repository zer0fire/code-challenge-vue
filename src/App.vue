<script setup lang="ts">
import { ref, computed } from "vue";
import HomePage from "./components/HomePage/index.vue";
import Chart from "./components/Chart/index.vue";
import DragList from "./components/DragList/index.vue";
const routes = {
  "/": HomePage,
  "/chart": Chart,
  "/drag": DragList,
};
const currentPath = ref(window.location.hash);
window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});
const currentView = computed(() => {
  return (
    // @ts-ignore
    (routes[(currentPath.value.slice(1) as any) || "/"] as any) || HomePage
  );
});
</script>
<template>
  <a href="#/">Home</a> | <a href="#/chart">About</a> |
  <a href="#/drag">Broken Link</a>
  <component :is="currentView" />
</template>
