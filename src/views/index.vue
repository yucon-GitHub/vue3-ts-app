<template>
  <div class="router-view">
    <button class="cl-main fz-20" @click="addNumber(2)">{{num}}</button>
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
    const data = ref(1);
    const addNumber = (params: Number) :void => {
      data.value += params;
    };

    addNumber(5);

    const total = computed({
      get: () => {
       return data.value + 5
      }
    });

    const num = computed({
      get: () => {
        return total.value + 10
      }
    });


    const items = ref({ name: 'haha', age: 18 });

    return {
      addNumber,
      data,
      total,
      num,

      items
    };
  }
}
</script>

<style scoped>

</style>
