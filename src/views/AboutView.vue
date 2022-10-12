<template>
  <div class="about">
    <h1>About</h1>
    <div class="count">
      {{count}}
    </div>
    <button class="counter-button" @click="resetCount">
      Reset
    </button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';

const counterStore = useCounterStore();
//For state and Getters(i.e. computed properties we need to use 'storeToRefs'  but not for actions)
const { count } = storeToRefs(counterStore);
const { resetCount } = counterStore;
</script>

<style scoped>
.count {
  font-size: 60px;
  margin: 20px;
}
.counter-button {
  font-size: 40px;
  padding: 5px 10px;
  border-radius: 10px;
  border: none;
  background-color: red;
  color: whitesmoke;
}
</style>
