<template>
  <div>
    <h1 @click="showMsg">{{ msg }}</h1>
    <h2>姓名 : {{ user }}</h2>
    <h2>性別 : {{ sex }}</h2>
    <h2>年齡 : {{ age }}</h2>
  </div>
</template> 

<script>
import {demo1} from '../mixin'

export default {
  name: "MixinInfo",
  data() {
    //console.log(this);
    return {
      msg: "Mixin 混入, 可以把多個組件共用的配置提出成成一個混入對象",
    }
  },
  props:['user','sex','age'],
  mixins:[demo1]
};
</script>
<!--
      第一步定義混和，定義在 xxx.js 裡面 
      export const xxx {
        data(){.....}
        methods:{.....}
      }
      2第二步使用混入, 例如
      * 全局混入 main.js 身上 做混入

      * 局部混入

      備註 : 名稱衝突會以元件身上定義的為主
      mixin性質：
        1. 組件的data、methods 優先級會高於mixin 的 data、methods。
        2. 生命週期會先執行mixin裡的，再執行組件裡的。
        3. 自定義的屬性，組件屬性優先級高於mixin屬性。
-->