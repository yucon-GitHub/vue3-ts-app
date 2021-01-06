<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      {{item.name}}
    </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: {
      type: String
    },
    item: {
      type: Object
    }
  }
})

export default class HelloWorld extends Vue {


}
</script>
