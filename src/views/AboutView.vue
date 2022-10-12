<template>
  <div class="about">
    <h1>About</h1>
    <button class="counter-button">
      {{count}}
    </button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';

const counterStore = useCounterStore();
//For state and Getters(i.e. computed properties we need to use 'storeToRefs'  but not for actions)
const { count } = storeToRefs(counterStore);
</script>

<style scoped>
.counter-button {
  font-size: 50px;
}
</style>
