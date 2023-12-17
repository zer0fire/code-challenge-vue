<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';
import { initDB, ListItem } from '../../utils/index';

type AddFnType = (list: ListItem) => Promise<void>;

const list: Ref<ListItem[]> = ref([]);
const addItemRef: Ref<null | AddFnType> = ref(null);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

onMounted(() => {
  const { getList, addItem } = initDB();
  getList().then((dbList) => {
    list.value = dbList.slice(0, 10);
    addItemRef.value = addItem;
  });
});

const onLoad = () => {
  setTimeout(() => {
    if (refreshing.value) {
      list.value = [];
      refreshing.value = false;
    }

    if (list.value.length >= 1000) {
      finished.value = true;
    } else {
      for (let i = 0; i < 10; i++) {
        list.value.push({ content: list.value.length + 1 });
        // store list value
        addItemRef.value &&
          addItemRef.value({ content: list.value.length + 1 });
      }
    }
    loading.value = false;
  }, 1000);
};

const onRefresh = () => {
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};
</script>
<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item.content"
        :title="item.content"
      />
    </van-list>
  </van-pull-refresh>
</template>
