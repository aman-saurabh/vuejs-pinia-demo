<template>
    <div class="count">
        {{count}}
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
.count {
    font-size: 60px;
    margin: 20px;
}
</style>