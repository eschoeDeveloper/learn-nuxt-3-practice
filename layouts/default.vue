<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>Vue Master Course</q-toolbar-title>
        <q-separator dark vertical />
        <!-- <q-btn stretch flat label="Home" to="/" /> -->
        <NuxtLink v-slot="{ navigate }" custom to="/">
          <q-btn stretch flat label="Home" @click="navigate" />
        </NuxtLink>
        <q-separator dark vertical />
        <!-- NuxtLink의 스타일이 깨진다면 custom 속성을 적용하여 살릴 수 있다. -->
        <!-- navigate 속성은 anchor의 이동 기능이 적용되도록 도와준다. -->
        <!-- <q-btn stretch flat label="About" to="/about" /> -->
        <NuxtLink v-slot="{ navigate }" custom to="/about">
          <q-btn stretch flat label="About" @click="navigate" />
        </NuxtLink>
        <q-separator dark vertical />
        <q-btn stretch flat label="Youtube" no-caps @click="moveYouTube()" />
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/admin">
          <q-btn stretch flat label="Admin" no-caps @click="navigate()" />
        </NuxtLink>
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
const pageContainerStyle = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}));
const moveYouTube = async () => {
  await navigateTo('https://youtube.com/@gymcoding', {
    external: true,
    open: { target: '_blank' },
  });
};
</script>
