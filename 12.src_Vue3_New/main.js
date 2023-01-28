import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
require("./mock");

//use elementplus 全局導入應用，會佔據比較大的空間。

//創建實例對象，外部組件庫採用 use的方式
createApp(App).use(ElementPlus).use(store).use(router).mount("#app");
