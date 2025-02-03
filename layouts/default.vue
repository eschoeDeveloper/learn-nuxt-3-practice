<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>Vue Master Course</q-toolbar-title>
        <q-separator dark vertical />
        <!-- <q-btn stretch flat label="Home" to="/" /> -->
        <NuxtLink v-slot="{ navigate }" custom to="/">
          <q-btn stretch flat :label="t('home')" @click="navigate" />
        </NuxtLink>
        <q-separator dark vertical />
        <!-- NuxtLink의 스타일이 깨진다면 custom 속성을 적용하여 살릴 수 있다. -->
        <!-- navigate 속성은 anchor의 이동 기능이 적용되도록 도와준다. -->
        <!-- <q-btn stretch flat label="About" to="/about" /> -->
        <!-- label="About" -->
        <NuxtLink v-slot="{ navigate }" custom to="/about">
          <q-btn stretch flat :label="t('about')" @click="navigate" />
        </NuxtLink>
        <q-separator dark vertical />
        <q-btn
          stretch
          flat
          :label="t('youtube')"
          no-caps
          @click="moveYouTube()"
        />
        <q-separator dark vertical />
        <NuxtLink v-slot="{ navigate }" custom to="/admin">
          <q-btn stretch flat :label="t('admin')" no-caps @click="navigate()" />
        </NuxtLink>
        <q-separator dark vertical />
        <q-btn-dropdown stretch flat no-caps :label="currentLanguageLabel">
          <q-list padding dense>
            <q-item v-close-popup clickable :to="localePath('/', 'en')">
              <q-item-section>
                <q-item-label>English</q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-close-popup clickable :to="switchLocalePath('ko')">
              <q-item-section>
                <q-item-label>한국어</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-separator dark vertical />
        <NuxtLink
          v-if="!isAuthenticated"
          v-slot="{ navigate }"
          custom
          to="/login"
        >
          <q-btn stretch flat :label="t('login')" no-caps @click="navigate()" />
        </NuxtLink>
        <!-- <NuxtLink v-else v-slot="{ navigate }" custom to="/"> -->
        <q-btn
          v-else
          stretch
          flat
          :label="t('logout')"
          no-caps
          @click="signOut()"
        />
        <!-- </NuxtLink> -->
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <q-banner v-if="isAuthenticated" class="bg-primary text-white">{{
        authUser
      }}</q-banner>
      <slot></slot>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { authUser, isAuthenticated } = useAuthUser();
const { signOut } = useAuth();
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
const { t, locale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const currentLanguageLabel = computed(() => {
  return locale.value === 'en' ? 'English' : '한국어';
});
</script>
