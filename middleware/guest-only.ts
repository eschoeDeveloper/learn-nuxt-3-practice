export default defineNuxtRouteMiddleware(() => {
  // const isAuthenticated = useAuthenticated();
  const { isAuthenticated } = storeToRefs(useAuthStore());

  // console.log(isAuthenticated);
  // if (process.server) return navigateTo('/');
  if (isAuthenticated.value) {
    return abortNavigation();
  }
});
