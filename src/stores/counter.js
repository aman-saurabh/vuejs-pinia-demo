import { ref, computed, watch } from 'vue'
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

  //To get localstorage value to set 'count' state on initialization.
  const persistingCount = localStorage.getItem("count");
  if (persistingCount) {
    count.value = JSON.parse(persistingCount)._value;
  }

  //To persiste 'count' state in localstorage.
  watch(count, userVal => {
    localStorage.setItem('count', JSON.stringify(count));
  }, { deep: true }
    //Here setting {deep: true} doesn't have any advantage but if your state is 
    //deeply nested then you should set it to true.
  )

  // Persisting nested 'dummy' data
  const dummy = ref({
    name: "Aman",
    address: {
      city: "Patna"
    }
  })

  const persistingDummy = localStorage.getItem("dummy");
  if (persistingDummy) {
    dummy.value = JSON.parse(persistingDummy)._value;
  }

  watch(dummy, userVal => {
    localStorage.setItem('dummy', JSON.stringify(dummy));
  }, { deep: true }
  )

  const setDummy = () => {
    dummy.value = {
      ...dummy.value, 'address': { ...dummy.value.address, 'city': dummy.value.address.city == "Patna" ? "Noida" : "Patna" }
    }
  }

  return { count, updateCount, resetCount, oddOrEven, dummy, setDummy }
})
