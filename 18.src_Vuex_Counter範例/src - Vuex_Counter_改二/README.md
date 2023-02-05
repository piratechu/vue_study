# vue-vuex

## vue counter 範例延續，直接呼叫 mutations

1. 除了使用 dispatch 呼叫 action 之外，如果 action 無邏輯，就直接呼叫 mutations，透過 commit
2. action 通常就是增加很多的邏輯再做處理，所以實作一個 random number 的 button 進行計算

## 使用 getters

1. 除了直接透過 store.state 抓取資料，也可以透過 getters 來取得
2. getters 當有需要做 computed 的計算或者篩選時，就可以透過此 getters 的方式進行處理。
3. 透過 history 的作法，來篩選曾經出現過的數字
