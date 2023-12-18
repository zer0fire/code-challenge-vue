<script setup lang="ts">
import { ref } from "vue";
import { evaluate } from "mathjs";

const expression = ref("");

function cal() {
  console.log(evaluate(expression.value));
  expression.value = evaluate(expression.value);
}
</script>

<template>
  <div>
    <input v-model="expression" />
    <van-button type="primary" @click="cal">=</van-button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
