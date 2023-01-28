<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>姓名 : {{ name }}</h2>
    <h2>性別 : {{ sex }}</h2>
    <h2>年齡 : {{ age }}</h2>
  </div>
  <!--props 傳入的值， vue 不建議修改。若修改 console 會報錯，雖然還是可以改-->
  <!--若一定要修改，可以用 this 取得 props 身上的傳入值-->
</template>

<script>
export default {
  name: "PropsInfo",
  data() {
      console.log(this);
    return {
      msg: "使用者資訊",
      //inAge: this.age,
    };
  },
  //props:['name','sex','age'] //簡單接收
  //用物件的方式定義，每個 attribute 的類型
  //會在 console 報錯
  //props: { name: String, sex: String, age: Number },
  //Prop 校验 的作法，此為更細緻的聲明，傳入值不滿足要求，瀏覽器控制台會報錯。
  props:{
    name:{
        type: String,
        required: true //必須值
    },
    age:{
        type: Number,
        default: 0 //默認值
    },
    sex:{
        type: String,
        //校驗函數
        validator(value){
            return ['男','女'].includes(value)
        }

    }
  }
};
    // // 多种可能的类型
    // propB: [String, Number],
    // // 对象类型的默认值
    // propE: {
    //   type: Object,
    //   // 对象或者数组应当用工厂函数返回。
    //   // 工厂函数会收到组件所接收的原始 props
    //   // 作为参数
    //   default(rawProps) {
    //     return { message: 'hello' }
    //   }
    // },
    // // 自定义类型校验函数
    // propF: {
    //   validator(value) {
    //     // The value must match one of these strings
    //     return ['success', 'warning', 'danger'].includes(value)
    //   }
    // },
    //     // 函数类型的默认值
    // propG: {
    //   type: Function,
    //   // 不像对象或数组的默认，这不是一个工厂函数。这会是一个用来作为默认值的函数
    //   default() {
    //     return 'Default function'
    //   }
    // }
</script>
