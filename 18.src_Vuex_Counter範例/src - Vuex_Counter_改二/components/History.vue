<template>
    <div class="container">
        <h4>History</h4>
        <div class="flex">
            <p
                v-for="(number, index) in history"
                :key="index"
                :class="indexes.includes(index) && 'bold'"
            >
                {{ number }}
            </p>
        </div>
        <input type="number" placeholder="Search by Index" v-model="queryNum" />
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
    name: "VueHistory",
    setup() {
        const store = useStore();
        let queryNum = ref(0);
        //注意要使用的是 Vuex getters 定義的 function name
        const history = computed(() => store.getters.getHistory);
        const indexes = computed(() => store.getters.getIndex(queryNum.value));
        return {
            //computed 訪問 getters
            history,
            queryNum,
            indexes,
        };
    },
};
</script>

<style scoped>
.container {
    margin-top: 3rem;
}
.flex {
    display: flex;
    text-align: center;
    width: 25rem;
    margin: 0 auto;
    justify-content: center;
    flex-wrap: wrap;
}
.flex p {
    margin: 1rem;
}
.bold {
    font-weight: 900;
    color: blue;
}
</style>
