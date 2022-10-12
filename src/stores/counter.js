import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);

  const oddOrEven = computed(() => count.value % 2 == 0 ? 'Even' : 'Odd')

  function updateCount(type) {
    if (type == 'inc')
      count.value++
    else if (type == 'dec')
      count.value--
  }

  return { count, updateCount, oddOrEven }
})
