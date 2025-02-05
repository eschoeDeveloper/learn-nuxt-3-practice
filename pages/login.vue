<template>
  <q-page padding>
    <div class="flex flex-center column q-pt-xl">
      <!-- <div class="text-h2 q-mt-xl q-mb-md">Login</div> -->
      <!-- <p class="text-subtitle1 q-mb-xl">Hello :)</p> -->
      <PageTitle title="Login" />
      <PageDescription description="Hello :)" />
      <FormLogin style="width: 400px" @success="handleLoginSuccess" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import guestOnly from '~/middleware/guest-only';
definePageMeta({
  middleware: [guestOnly],
});
const handleLoginSuccess = async () => {
  // const isAdmin = useAdmin();
  const { isAdmin } = storeToRefs(useAuthStore());
  const redirect = isAdmin.value ? '/admin' : '/';
  await navigateTo(redirect);
};
</script>
