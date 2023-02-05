import { createStore } from "vuex";

export default createStore({
    //set store data
    state: {
        vuexcnt: 100,
    },
    //更新資料
    mutations: {
        addCounter(state, value) {
            state.vuexcnt += value;
        },
        subCounter(state, value) {
            state.vuexcnt -= value;
        },
    },
    //等於 methods
    actions: {
        addCounter({ commit }, value) {
            commit("addCounter", value);
        },
        subCounter({ commit }, value) {
            commit("subCounter", value);
        },
    },
});
