<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- 將子物件定義 emit 事件 customChange 定義在物件上，用一個 methods 接收 -->
    <MyTextInput @customChange="emitFromChild"></MyTextInput>
    <label>顯示的是父組件</label><br />
    {{ msg }}
</template>

<script>
import MyTextInput from "./components/MyTextInput.vue";
import { ref } from "vue";

export default {
    name: "App",
    components: { MyTextInput },
    setup() {
        let msg = ref("");
        function emitFromChild(value) {
            msg.value = value;
        }
        return { msg, emitFromChild };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
