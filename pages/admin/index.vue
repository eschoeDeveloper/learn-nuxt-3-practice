<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <!-- <div class="text-h4">Admin Page</div> -->
      <!-- <p class="q-mt-sm text-grey-8">Admin Layout 실습을 위한 페이지 입니다.</p> -->
      <PageTitle title="Admin Page" />
      <PageDescription description="Admin Layout 실습을 위한 페이지 입니다." />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import adminOnly from '~/middleware/admin-only';
definePageMeta({
  layout: 'admin',
  middleware: [adminOnly],
});
</script>

<style scoped></style>
