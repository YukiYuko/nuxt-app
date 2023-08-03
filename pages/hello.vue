<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts" setup>
const msg = ref("");
onMounted(async () => {
  const { message } = await $fetch('/api/hello');
  msg.value = message;
})
</script>

<style scoped>

</style>
