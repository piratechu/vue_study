import { createStore } from 'vuex'
//import { state } from './state'
// import { mutations } from './mutationsns'
// import { actions} from './actions'

export default createStore({
  state: {
    //透過 store 也可以直接取
    msg: 'from Vuex State',
    sum:0,
    message: 'Hello Vue!!'
    // n:1,

  },
  getters: {
    //從 getter 取得 state 資料(建議)
    //類似 computed 的感覺
    getSum(object){
      return object.sum
    },
    getMessage(object){
      return object.message;
    }
  },
  mutations: {
    //透過 action commit 進行邏輯變動，
    //後更新 state，並更新畫面
    increment(object,value){
      //object: state
      //this.sum += value;
      object.sum += value
      console.log("increment:", object.sum);
    },
    decrement(object,value){
      object.sum -= value;      
    },
    updateMsg(object,value){
      object.message = value;
    }
  },
  //對比的是 methods
  actions: {
    updateMsg(object,value){
      this.commit("updateMsg",value);
    },
    increment(Object,value) {
      //object: dispatch
      //從 component methods 呼叫 action
      //然後用 commit 去請求 mutations 去更新state
      this.commit('increment',value);
    },
    decrement(object,value) {
      this.commit('decrement',value);
    },

  },
  modules: {
  }
})
