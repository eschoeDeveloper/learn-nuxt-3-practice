<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <!-- <div class="text-h4">About</div> -->
      <!-- <p class="q-mt-sm text-grey-8">
        Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다.
      </p> -->
      <PageTitle title="About" />
      <PageDescription
        description="Vue & Nuxt Mastery Class 웹은 Nuxt3로 만들어졌습니다."
      />

      <div class="q-gutter-y-sm q-mt-md">
        <div class="text-subtitle1 text-weight-bold">useCounterStore()</div>
        <div>{{ count }}</div>
        <div>{{ doubleCount }}</div>
        <div>
          <q-btn label="increment" @click="counterStore.increment()" />
        </div>
      </div>

      <!-- <div class="q-gutter-y-sm q-mt-md">
        <div class="text-subtitle1 text-weight-bold">useState('counter')</div>
        <div>
          counter: {{ counter ?? 1 }}
          <q-btn
            label="counter"
            color="primary"
            dense
            no-caps
            @click="counter++"
          />
        </div>
        <div>
          sameCounter: {{ sameCounter ?? 1 }}
          <q-btn
            label="sameCounter"
            color="primary"
            dense
            no-caps
            @click="sameCounter++"
          />
        </div>
        <div>
          <q-btn label="clear" @click="clearCounter" />
        </div> -->
      <!-- </div> -->

      <!-- 
        RouterLink는 왜 중첩되어서 움직일까? 내부와 외부차이?
        NuxtLink는 렌더링을 최적화하여 지능적으로 움직인다고 한다.
        -->
      <!-- prefetch: 활성화 여부, prefetched-class: prefetch 시 적용할 클래스 -->
      <!-- <div class="column">
        <RouterLink to="/">RouterLink Home</RouterLink>
        <RouterLink to="https://www.youtube.com/@gymcoding">
          RouterLink YouTube
        </RouterLink>
        <br />

        <NuxtLink to="/">NuxtLink Home</NuxtLink>
        <NuxtLink to="https://www.youtube.com/@gymcoding">
          NuxtLink YouTube
        </NuxtLink>
      </div> -->
    </div>
  </q-page>
</template>

<script setup lang="ts">
// const counter = useState<number>('counter', () => 1);
// const sameCounter = useState<number>('counter');
// const clearCounter = () => {
//   clearNuxtState('counter');
//   counter.value = 1;
// };

const counterStore = useCounterStore();
const { count, doubleCount } = storeToRefs(counterStore);
</script>
