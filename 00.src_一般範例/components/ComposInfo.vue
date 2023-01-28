<template>
  <div>
    <h1 @click="showMsg(msg)">{{ msg }}</h1>
    <h2>姓名 : {{ user }}</h2>
    <h2>性別 : {{ sex }}</h2>
    <h2>年齡 : {{ age }}</h2>
  </div>
</template> 

<script>
import {useComApi} from '@/composable'

export default {
  name: "ComposInfo",
  setup(){
    const { resuseMsg, showMsg } = useComApi();
    return { resuseMsg, showMsg };
  },
  data() {
    //console.log(this);
    return {
      msg: "Mixin 混入, 用 Composables 轉換",
    }
  },
  props:['user','sex','age'],

};
</script>