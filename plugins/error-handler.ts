import { Notify } from 'quasar';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vue:error', (err) => {
    // console.log('error');
    if (err instanceof Error) {
      if (process.client) {
        Notify.create({
          message: err.message,
          type: 'negative',
        });
      } else {
        console.log('error: ', err.message);
      }
    }
  });
});
