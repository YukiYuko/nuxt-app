<template>
  <div class="h-screen flex flex-col">
    <NavBar></NavBar>

    <!--  主题内内容-->
    <div class="flex-1 overflow-auto">
      <!--  使用插槽-->
      <slot />
    </div>

    <div class="py-2 text-center">
      <h3>我是底部aaa</h3>
    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
