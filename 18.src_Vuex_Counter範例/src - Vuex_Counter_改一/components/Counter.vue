<template>
    <h1>Vuex Counter</h1>
    <h1 class="counter">{{ counter }}</h1>
    <button @click="subCouter(Cnt)">-</button>
    <input type="number" v-model="Cnt" />
    <button @click="addCounter(Cnt)">+</button>
</template>

<!-- 使用 vuex 做參數傳遞-->
<!-- 
    
    1. 將 參數移轉到 state 的狀態下
    2. 如何抓取 vuex state 資料呢?
    使用 $store 的實例
    2. 將目前 function 改寫到 actions/mutations 的項目中
    在 actions 當中 commit 資料到 mutations 上去做變更或者計算
-->
<script>
// 1. 因引入未使用移除
// import { ref } from "vue";
import { useStore } from "vuex";

import { computed, ref } from "vue";

export default {
    name: "VuexCounter",
    setup() {
        // 1. 將參數移轉到 vuex state
        // let VexCnt = ref(0);
        let Cnt = ref(1);
        const store = useStore();
        //2. 把 function 移轉到 action，透過
        // function subCouter() {
        // 1. 參數將無法使用
        // VexCnt.value--;
        // }
        const subCouter = (value) => store.dispatch("subCounter", value);
        //2. 把 function 移轉到 action，透過
        //action 做 commit
        // function addCounter() {
        // 1. 參數將無法使用
        // VexCnt.value++;
        // }
        const addCounter = (value) => store.dispatch("addCounter", value);

        return {
            counter: computed(() => store.state.vuexcnt),
            subCouter,
            Cnt,
            addCounter,
        };
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
