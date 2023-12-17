<script setup lang="ts">
import { Chart, registerables } from "chart.js";
import { markRaw, onMounted, Ref, ref, toRaw } from "vue";

Chart.register(...registerables);

let id = 1;
function add() {
  const chart = toRaw(chartRef.value);
  chart!.data.labels!.push(`pink ${id++}`);
  chart!.data.datasets[0].data.push(10);
  chart!.update();
  chartRef.value = chart;
}
const config = markRaw({
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
const ctxRef: Ref<HTMLCanvasElement | null> = ref(null);
const chartRef: Ref<Chart<"bar", number[], string> | null> = ref(null);
onMounted(() => {
  const ctx = ctxRef.value!.getContext("2d");
  // Chart.defaults.elements.point.radius = 5;
  chartRef.value = ctx && new Chart(ctx, config as any);
});
</script>
<template>
  <div>
    <canvas ref="ctxRef" id="myChart"></canvas>
    <van-button @click="add" type="primary">add</van-button>
  </div>
</template>
<style scoped lang="scss"></style>
