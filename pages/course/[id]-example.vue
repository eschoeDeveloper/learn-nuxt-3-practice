<template>
  <q-page>
    <h2>Course</h2>
    <div class="text-subtitle1">
      {{ $route.params }}
    </div>
  </q-page>
</template>

<script setup lang="ts">
const route = useRoute(); // 실제 내부 임포트는 하지 않지만, Auto Import된다.
console.log(route.params.id);
</script>

<style scoped></style>
