import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import  App from './App.vue'
import router from './router'
import store from './store'
import myPlugin from './plugins/myPlugins'

createApp(App).use(myPlugin).use(ElementPlus).use(store).use(router).mount('#app')
