<template>
    <h1>Vuex Counter</h1>
    <h1 class="counter">{{ counter }}</h1>
    <button @click.prevent="subCouter(Cnt)">-</button>
    <input type="number" v-model="Cnt" />
    <button @click="addCounter(Cnt)">+</button>
    <div>
        <button class="btn" @click.prevent="addRandom">
            add by random number
        </button>
    </div>
</template>

<!-- 使用 vuex 做參數傳遞-->

<!-- 
    1. 如果 action 無邏輯，可以直接寫 mutations即可
    2. 當 action 增加一個產生亂數的功能，此事 action 就會有較多
    邏輯要處理。
    3. Vuex getter 功能
    雖然可以透過 useStore 直接 get state 資料，但也可以透過
    getter 取得，因為可以透過 getter 作一些取資料的計算。
    e.g return 篩選過的資訊
-->
<script>
import { useStore } from "vuex";
import { computed, ref, onUpdated } from "vue";

export default {
    name: "VuexCounter",
    setup() {
        let Cnt = ref(1);
        const store = useStore();
        //直接 call mutations
        const subCouter = (value) => store.commit("subCounter", value);
        //直接 call actions
        const addCounter = (value) => store.dispatch("addCounter", value);
        const addRandom = () => store.dispatch("addRandom");
        //透過 onUpdated 的 Hooks，將資料更新回 Cnt
        onUpdated(() => {
            // console.log(Cnt.value, store.randomNum);
            if (store.randomNum != undefined) {
                Cnt.value = store.randomNum;
                store.randomNum = undefined;
            }
        });

        return {
            counter: computed(() => store.state.vuexcnt),
            subCouter,
            Cnt,
            addCounter,
            addRandom,
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
