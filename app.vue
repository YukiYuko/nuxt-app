<template>
<!--  <div>-->
<!--&lt;!&ndash;    <NuxtWelcome />&ndash;&gt;-->
<!--    <NuxtLayout>-->
<!--      <NuxtPage></NuxtPage>-->
<!--    </NuxtLayout>-->
<!--  </div>-->
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<script lang="ts" setup>
useHead({
  titleTemplate: (s) => {
    return s ? `${s} - 星白凛的技术空间` : "星白凛的技术空间";
  },
});
</script>
