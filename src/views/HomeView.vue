<template>
  <div class="home">
    <div class="count">
      {{count}}
    </div>
    <div class="buttons">
      <button @click="updateCount('dec')" :disabled="count==0">-</button>
      <button @click="updateCount('inc')">+</button>
    </div>
    <hr>
    <div class="count-type">
      The count is {{oddOrEven}}
    </div>
  </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue'
const count = ref(0);

const updateCount = (type) => {
  if (type == 'inc') {
    count.value++;
  } else if (type == 'dec') {
    if (count.value > 0)
      count.value--;
  }
}

const oddOrEven = computed(() => count.value % 2 == 0 ? 'Even' : 'Odd')
</script>

<style scoped>
.count {
  font-size: 60px;
  margin: 20px;
}

.buttons button {
  font-size: 40px;
  margin: 10px;
  width: 50px;
}
</style>