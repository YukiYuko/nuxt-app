<template>
  <div class="p-5">
    <!-- 显示错误信息 -->
    <div v-if="error">{{ errorMsg }}</div>
    <div v-else-if="pending">加载中...</div>
    <div v-else >
      <div class="text-[16px] text-blue-400 text-center">{{ title }}</div>
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NuxtError } from "#app";

const route = useRoute();
const fetchPost = () => $fetch(`/api/detail/${route.params.id}`);
// 添加 error
const { data, pending, error } = await useAsyncData("post", fetchPost)
console.log("Data", data.value);
const { title, content } = data.value;
useHead({
  title: title
});
// 获取服务端返回的错误信息
console.log("error", error);
const errorMsg = computed(() => (error.value as NuxtError).data.message)
</script>

<style scoped>

</style>
