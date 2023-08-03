<template>
  <nav
    class="border-b border-slate-200 px-5 py-2 flex items-center justify-between"
  >
    <h1 class="text-2xl font-bold">{{ appConfig.title }}</h1>
    <Avatar></Avatar>
  </nav>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
const runtimeConfig = useRuntimeConfig();
console.log('Runtime config:', runtimeConfig);
</script>

<style scoped>

</style>
