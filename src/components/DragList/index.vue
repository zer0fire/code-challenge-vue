<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";
let id = 3;
let enabled = true;
const localItem = window.localStorage.getItem("dragList");
const localList = localItem && JSON.parse(localItem);
let list = ref(
  localList || [
    { name: "列表项0", id: 0 },
    { name: "列表项1", id: 1 },
    { name: "列表项2", id: 2 },
  ]
);
let dragging = false;

function swap(list: Array<number>, i: number, j: number) {
  let temp = list[i];
  list[i] = list[j];
  list[j] = temp;
  return list;
}

function add() {
  list.value.push({ name: "列表项 " + id, id: id++ });
  window.localStorage.setItem("dragList", JSON.stringify(list.value));
}
// function replace() {
//   list.value = [{ name: "Edgard", id: id++ }];
// }
function move(drag: any, drop: any) {
  const localItem = window.localStorage.getItem("dragList");
  const localList = localItem && JSON.parse(localItem);
  const domList = Array.from(drag.dragged.parentNode.childNodes);
  const dragIndex = domList.indexOf(drag.dragged);
  const dropIndex = domList.indexOf(drop.target);
  const newValue = swap(localList, dragIndex, dropIndex);
  window.localStorage.setItem("dragList", JSON.stringify(newValue));
}
</script>
<template>
  <button class="btn btn-secondary" @click="add">Add</button>
  <!-- <button class="btn btn-secondary" @click="replace">Replace</button> -->
  <div class="col-6">
    <draggable
      :list="list"
      :disabled="!enabled"
      item-key="name"
      class="list-group"
      ghost-class="ghost"
      :move="move"
      @start="dragging = true"
      @end="dragging = false"
    >
      <template #item="{ element }">
        <div class="list-group-item" :class="{ 'not-draggable': !enabled }">
          {{ element.name }}
        </div>
      </template>
    </draggable>
  </div>
</template>
<style scoped>
.buttons {
  margin-top: 35px;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.not-draggable {
  cursor: no-drop;
}
</style>
