import { createStore } from "vuex";

export default createStore({
    //set store data
    state: {
        vuexcnt: 100,
        randomNum: 0,
        history: [],
    },
    //更新資料
    mutations: {
        addCounter(state, value) {
            state.vuexcnt += value;
            state.history.push(state.vuexcnt);
        },
        subCounter(state, value) {
            state.vuexcnt -= value;
            //console.log("muations");
            state.history.push(state.vuexcnt);
        },
    },
    //等於 methods
    actions: {
        addCounter({ commit }, value) {
            commit("addCounter", value);
            //console.log("actions");
        },
        subCounter({ commit }, value) {
            commit("subCounter", value);
        },
        //delay 1sec generator random number
        addRandom({ commit }) {
            console.log("add Random number");
            let min = Math.ceil(-200);
            let max = Math.floor(500);
            setTimeout(() => {
                this.randomNum = Math.floor(
                    Math.random() * (max - min + 1) + min
                );
                commit("addCounter", this.randomNum);
                //console.log("random num:", this.randomNum);
            }, 1000);
        },
    },
    //getters
    getters: {
        getHistory(state) {
            console.log(state.history);
            return state.history;
        },
        getIndex: (state) => (queryNum) => {
            let indexes = [];
            state.history.forEach((number, index) => {
                if (number === queryNum) {
                    indexes.push(index);
                }
            });
            return indexes;
        },
    },
});
