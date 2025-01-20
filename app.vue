<template>
  <!--:name="layoutName"-->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
// import type { LayoutKey } from '#build/types/layouts';
// const layoutName = ref<LayoutKey>('default');
const nuxtApp = useNuxtApp();
console.dir(nuxtApp);
nuxtApp.provide('hello', (msg: string) => `hello ${msg}`);
</script>
