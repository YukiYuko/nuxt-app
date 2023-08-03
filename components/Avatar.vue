<template>
  <div>
    <img
      class="w-[50px] border-[1px] border-slate-300 rounded-full inline-block"
      src="~/assets/img/avatar.jpg"
      alt="avatar"
    />
    <span class="ml-2">{{ userInfo.userName }}</span>
  </div>
</template>

<script lang="ts" setup>
// import { useUser } from '~/store/user';
// 获取状态，转换为 Ref，其他代码无需改变
const store = useUser();
const { userInfo } = storeToRefs(store);
</script>

<style scoped>

</style>
