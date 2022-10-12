import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);

  const oddOrEven = computed(() => count.value % 2 == 0 ? 'Even' : 'Odd')

  const updateCount = (type) => {
    if (type == 'inc')
      count.value++
    else if (type == 'dec')
      count.value--
  }

  const resetCount = () => {
    count.value = 0
  }

  return { count, updateCount, resetCount, oddOrEven }
})
