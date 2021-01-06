<template>
  <div class="router-view">
    <button class="cl-main fz-20" @click="addNumber(2)">{{total}}</button>
    <hello-world msg="1221" :item="items"></hello-world>
  </div>
</template>

<script lang="ts">
import { ref, computed } from 'vue';
import helloWorld from '@/components/HelloWorld.vue';
export default {
  components: {
    'hello-world': helloWorld
  },

  setup() {
    let data = ref(1);
    const addNumber = (params: number): number => {
      return data.value += params;
    };

    const total = computed((): number => data.value += 5);

    addNumber(5);

    const items = ref({ name: 'haha', age: 18 });

    return {
      addNumber,
      data,
      items,

      total
    };
  }
}
</script>
