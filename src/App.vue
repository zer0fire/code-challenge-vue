<script setup lang="ts">
import HomePage from "./components/HomePage/index.vue";
import DragList from "./components/DragList/index.vue";
import Chart from "./components/Chart/index.vue";
</script>

<template>
  <!-- <HomePage></HomePage> -->
  <!-- <DragList></DragList> -->
  <Chart></Chart>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
