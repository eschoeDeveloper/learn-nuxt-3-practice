import { Store } from '@/store';// path to store file
import VueRouter, { Route } from 'vue-router'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store;
    $route: VueRouter;
  }
}
