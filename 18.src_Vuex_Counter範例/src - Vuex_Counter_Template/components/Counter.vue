<template>
    <h1>Vuex Counter</h1>
    <h1 class="counter">{{ VexCnt }}</h1>
    <button @click="subCouter">-</button>
    <input type="number" v-model="VexCnt" />
    <button @click="addCounter">+</button>
</template>

<script>
import { ref } from "vue";

export default {
    name: "VuexCounter",
    setup() {
        let VexCnt = ref(0);
        function subCouter() {
            VexCnt.value--;
        }
        function addCounter() {
            VexCnt.value++;
        }
        return { VexCnt, addCounter, subCouter };
    },
};
</script>

<style scoped>
.counter {
    font-size: 5rem;
}
button {
    border-radius: 100%;
    border: none;
    width: 2rem;
    height: 2rem;
    font-weight: 700;
    cursor: pointer;
}
input {
    padding: 0.4rem;
    margin: 0 0.5rem;
    text-align: center;
}
.btn {
    border-radius: 0.5rem;
    width: auto;
    background: #41b983;
    margin-top: 1rem;
    color: white;
    cursor: pointer;
}
</style>
