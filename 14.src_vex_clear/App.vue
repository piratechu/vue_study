<template>
    <h1>目前加總: {{ sum }}</h1>
    <select v-model.number="n">
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="1">1</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇數才可以再加</button>
    <button @click="incrementWait">等一等再加</button>
    <br /><br />
    <!-- <h1>{{ sayHelloVuex }}</h1> -->
    {{ message }}
    <input v-model="message" />
    <!--改成 getter / setter 就改成 v-model 的寫法-->
    <!-- <input :value="message" @input="updateMsg" /> -->
    <!-- <input v-model="message" />-->
</template>

<script>
import { ref } from "vue";

export default {
    name: "App",
    setup() {
        const sum = ref(0);
        const n = 1;
        //把 message 更新到 vuex 的 state
        const message = ref("Hello Vue!!");
        return {
            // n,sum 移到 vuex: state
            n,
            message,
            sum,
        };
    },
    computed: {
        // sayHelloVuex() {
        //     return this.$store.state.msg;
        // },
        // sum() {
        //     return this.$store.getters.getSum;
        // },
        //將 computed 改成 getter / setter 寫法
        // message() {
        //     return this.$store.getters.getMessage;
        // },
        // message: {
        //     get() {
        //         return this.$store.getters.getMessage;
        //     },
        //     set(value) {
        //         this.$store.commit("updateMsg", value);
        //     },
        // },
        // ...myState({key:'vuex state name'})
        // ...myState(['vuex state name'])
    },
    methods: {
        //輸入的部分，可以寫在 computed 的 setter
        // updateMsg(e) {
        //     this.$store.dispatch("updateMsg", e.target.value);
        // },
        increment() {
            this.sum += this.n;
            // this.$store.dispatch("increment", this.n);
        },
        decrement() {
            this.sum -= this.n;
            // this.$store.dispatch("decrement", this.n);
            //如果沒有業務邏輯要處理，可以直接在此 commit 呼叫
            // mutations
        },
        incrementOdd() {
            if (this.sum % 2) {
                this.sum += this.n;
            }

            //Vuex 的改法
            // if (this.$store.getters.getSum % 2) {
            //     this.$store.dispatch("increment", this.n);
            // }
        },
        incrementWait() {
            setTimeout(() => {
                this.sum += this.n;
            }, 500);

            //vuex 改法
            // setTimeout(() => {
            //     this.$store.dispatch("increment", this.n);
            // }, 500);
        },
    },
};
</script>
