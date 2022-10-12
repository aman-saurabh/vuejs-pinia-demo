<template>
  <div class="home">
    <Counter />
    <div class="buttons">
      <button @click="updateCount('dec')" :disabled="count==0">-</button>
      <button @click="updateCount('inc')">+</button>
    </div>
    <hr>
    <div class="count-type">
      The count is {{oddOrEven}}
    </div>
    <hr>
    <input type="number" v-model="count" min="0">
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';
import Counter from '../components/Counter.vue';

const counterStore = useCounterStore();
//For state and Getters(i.e. computed properties we need to use 'storeToRefs'  but not for actions)
const { count, oddOrEven } = storeToRefs(counterStore);
const { updateCount } = counterStore;

</script>

<style scoped>
.buttons button {
  font-size: 40px;
  margin: 10px;
  width: 50px;
}
</style>