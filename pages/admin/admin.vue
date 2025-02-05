<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import adminOnly from '~/middleware/admin-only';

definePageMeta({
  middleware: [adminOnly],
});
</script>

<style scoped></style>
