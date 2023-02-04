# vue-demo

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## ref 使用

### 一般用法

1. <div ref='XXX'> => 透過 xxx.value 會取得該 DOM 元素的資料
2. v-for 中使用 ref => 要用 v-bind 自定義 ref，透過 reactive 進行深度監視
   e.g <li v-for="item in 10" :ref="setItemRefs" :key="item">
   setItemRefs : function 參數，會傳入 DOM 元素，將資料傳入(push)行定義的 ref 陣列或者物件中。

### 傳參數

3.ref 綁定函數，也要使用 v-bind。自定義函數，會傳入一個 dom 資訊

4. ref 綁定函數 + v-for，使用方式與之前 v-for 綁定方式差不多。 5. 組件上使用，可以綁定組件上的數據與方法

5. 綁定物件
    1. 在父物件上的 template 加上 ref 的屬性，在 mounted 去抓取 this.$refs.xxx.yyy ， yyy 為物件中的數據或者方法
       e.g <child ref="xxx"/>
    1. 子物件可以件限制父物件使用，可以透過 expose，來指定那些可以被暴露，未暴露的如果被使用匯回傳 undefine。

備註: Vue 3 中移除了 $on、$off、$once

### vue3 ref 函數

把需要響應式的參數使用 ref 進行配置，才會做響應式的反應。他會變成一個物件。
RefImpl(reference Implement) - 引用實現物件
所以改資料要用 xxx.value 來修改。

-   物件(obj) 在物件用 ref，應該怎麼修改。
    -- xxx.value.物件名稱 = xxx

-   物件 / 陣列 建議使用 reactive，可以直接抓取，不用 .value。尤其針對深層次的物件。
    -- 返回是一個 proxy 的代理物件。(ES6)

## 跨元件通訊

### GlobalEventBus 全局事件總線

Vue2 跨元件通訊是透過 EventBus 手法，但需要使用到 $on / $off 等語法，因為 vue3 已經廢除
所以 vue3 沒有 EventBus 的作法。
Vue2 寫法 : https://ithelp.ithome.com.tw/articles/10242193

會找到有人推薦 mitt 套件，可維持原來 event bus 的寫法。Mitt 是一套用來處理事件訂閱/發佈的函式庫。更重要的是，它只有 200 byte
EventBus - 將所有的事件綁在 vue prototype 上，這樣所有的 component 就可以進行跨組件的通訊

跨元件通訊的做法都採用 Vuex or 現在推薦的 Pinia

## 消息訂閱語發布

### 外部套件 - pubsub-js (自行了解)

### VS Code Extensions

1. Auto Rename tag : 會自動將需要修改的 html tag 前後一起修正
2. Live Server : 在本地端啟動一個 Server
3. Prettier : 自動調整成是碼的格式，需要修正設定，可以在存檔的時候自動調整。
   ==> 設定 -> Editor: Format On Save -> 打勾
4. Volar : Vue 官方插件，針對 vue 語法檢查、高亮
5. vue vscode snippets : 為開發者提供最簡單快速的生成 Vue 程式碼片段的方法，通過各種快捷鍵就可以在 .vue 檔案中快速生成各種程式碼片段。簡直是 Vue3 開發必備神器
    - 在 .vue 檔案, 輸入 -> vbase -> 生成 vue 模板
    - 輸入 v3 > 就可以選擇 vue3 的生命週期函數
    - 輸入 vxxx > 可以生成相關指令模板
6. ESLint : Java script 會有標準的規範檢查

## todo list 總結

### 組件開發流程

1. 拆分靜態組件: 組件要按照功能點拆分，命名不要與 html 衝突
1. 實現動態組件: 考慮數據存放位置，數據是一個組件再用，還是依些組件在用。
    1. 一個組件在用，放在組件本身即可。
    1. 多個組件在用，放在他們共同的父組件上面(狀態提升)
1. 實現交互: 從綁定事件開始。
1. props 適用於
    1. 父組件 -> 子組件通訊
    1. 子組件 -> 父組件通訊(要求父組件先給子組件一個函數)
1. 使用 v-model 時要切記: v-model 綁定的值不能是 propos 傳過來的，因為 props 是不可以修改的。
1. props 傳過來的若是物件類型的值，修改物件的屬性時 Vue 不會報錯， 但不推薦。

1. todo 如果要用 EventBus 修改 items => item 的 props 逐層傳遞，在建立整個的 app or view 的 mounted($on) & beforeDestroy($off) 上進行建立及修毀
1. 在需要呼叫的 \*.vue 上面，直接透過 $emit 進行呼叫使用

1. 新增修改功能: 將 props 的調整成 emits 、增加修改功能

## Vue3 Animations

主要三六個 css tag

-   xxx-enter-from{}
-   xxx-enter-to{}
-   xxx-enter-active{}
-   xxx-leave-from{}
-   xxx-leave-to{}
-   xxx-leave-active{}
-   xxx-move{}

    Animate css : https://animate.style/
    可以自己練習在 todo 小專案中，添加新增、刪除的動畫。

## axios

### 什麼是 CORS

簡單來說，就是你這個頁面的網域名稱，跟 API 的網域名稱不一樣，如果沒有伺服器沒有加以阻擋，瀏覽器接收到的 Response 就會含有 CORS
https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS

### 基本用法

    getAxiosData() {
            axios
                .get("/api/students")
                .then((response) => {
                    this.students = response.data.list;
                })
                .catch((error) => {
                    console.log("axios error:", error.data);
                });
        },

需要注意，使用 vue components 的參數要記得 ref 才可以產生資料響應

## slot 插槽 - 提供另外一種組件間的資料傳遞

### default slot(默認插槽）

-   父組件直接把資料塞給子組件

### Named slot（具名插槽）

-   指定名字，把資料把放在規劃好的 layout 位置上

### Scoped slot（作用域插槽）

-   資料可以從父組件傳遞到子組件，但某些狀況下父組件需要知道子組件的數據。
    所以我們會需要將部分數據提供給插槽回傳給父組件。
-   類似 props 的傳遞方式，在插槽上傳遞一個 attributes
-   組件內傳遞還是要綁定 ref

### Dynamic slot（動態插槽）

-   可以在父層動態指定插槽

## Vuex

-   在 vue 中實現集中式狀態(數據)管理的插件，對應 vue 應用中，多個組件共享狀態進行集中式管理(讀寫)，也是組件中
    一種通訊的方式，且適用於任意組件通信。
-   https://vuex.vuejs.org/zh/guide/
-   目前官方比較推薦 : Pinia https://pinia.vuejs.org/zh/
-   Vuex 的狀態圖 / Pinia

### Vuex 狀態圖

![Vuex狀態圖](https://vuex.vuejs.org/vuex.png)

所有的動作開始都是從 action 開始，接著 store 把結果存起來後，
改變 state， view (元件或頁面)就換變更。
\*\* 重點 : 不可逆，因此稱單向資料流

State:
🔸 存放資料狀態

Getters:
🔸 取得狀態，類似 computed 重組資料
🔸 components 不要直接取得 state，先用 getters 去處理資料邏輯，再回傳資料。

Mutations:
🔸 唯一改變 state 的方法
🔸 只能做同步操作，mutations 不能做非同步操作
🔸 mutations 需用 commit 呼叫

Actions:
🔸 actions 觸發 mutations，commit 會發送事件給 mutations
🔸 actions 才做非同步操作
🔸 需用 dispatch 呼叫
🔸 不能更改 state

流程: components ➜ dispatch ➜ actions ➜ commit ➜ mutations ➜ state ➜ getters ➜ components

當專案太大，建議可以採模組的方式切割 vuex 。設定 namespaced 在不同的 module，這樣就不會有名稱衝突。
但呼叫上也要將模組名稱帶入。

https://medium.com/kids5346/%E5%AD%B8%E7%BF%92-vuex-%E7%9A%84-module-%E8%88%87-getter-cc2209d9bc79
https://vuex.vuejs.org/zh/guide/getters.html

可以利用 mapState / mapGetters / mapActions / mapMutations 進行簡化，module 的用法比較有差異。

...mapGetters({
exampleGetter: 'myModule1/exampleGetter',
anotherGetter: 'myModule2/anotherGetter',
})
... : 意思把物件依序取出展開
https://medium.com/itsems-frontend/vue-vuex4-modules-ddb3eec6b834

Vuex 数据持久化的两种方式：手动存储和 vuex-persistedstate 插件
https://blog.csdn.net/m0_62823653/article/details/124904767

### Pinia 狀態圖

![Pinia 狀態圖](https://cn.vuejs.org/assets/state-flow.a8bc738e.png)

## vue-Router

### 路由聲明作法

-   調整 router 目錄裡面的 index.js 直接聲明各級路由級元件
-   一般路由設定方式
-   巢狀式路由(Nested Routes，嵌套路由)，命名法使用方式
-   我們前面做法都屬於聲明式，也可以透過程式去控制導航的路徑。
    https://router.vuejs.org/guide/essentials/navigation.html
-   命名路由，透過 vue-route 設定的 name 屬性 做為切換使用的名字。

### 路由傳參

-   使用 params & propos 傳遞
-   parames /props 增加式網址一直往下串，主要是因為你必須在 route 定義傳參的名稱，url 一次只能定義一個。
    -- e.g params: { id : item.id, name:item.name}
    url : /news/id/name
    -- 參數傳遞就是使用 query 才是比較正確

-   Boolean mode (propos 傳遞)
    -- 將 router props 設定成 true 就會設定成 component props 方式傳遞

-   若需要區分權限，可以透過 Vuex 確認權限後，透過 addroute 的方法渲染相關選單的部分。

-   基本式 push 模式，所以會有歷史紀錄。若改 replace 模式，在 RouterLink 增加 replace 屬性，就表示沒有 history。
-   useRoute 取資料、 useRouter 設定資料
-   keep-live : 資料被緩存被使用

### 導航守衛(Navigation guards)，權限卡控

-   全局全置守衛 - beforeEach (設定在 vue-route 全局內)
-   全局後置守衛 - afterEach (設定在 vue-route 全局內)
-   全局解析守衛 - beforeResolve (設定在 vue-route 全局內)
-   獨享路由守衛 - beforeEnter(設定在單一路由設定中)
-   物件內路由守衛 - 寫在物件中
    -- beforeRouteEnter - 進入組件時被調用
    -- beforeRouteUpdate - 更新組件前被調用
    -- beforeRouteLeave - 離開組件時被調用

```
const UserDetails = {

template: `...`,

beforeRouteEnter(to, from) {

    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！

},

beforeRouteUpdate(to, from) {

    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
    // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`

},

beforeRouteLeave(to, from) {

    // 在导航离开渲染该组件的对应路由时调用
    // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`

},

}
```

## vue3 computed (setup) ，使用箭頭函數傳回

-   let fullname = computed (()=> { return xxxx})
    与 computed 配置功能一致
    只有 getter
    有 getter 和 setter

## watch 監視屬性 (setup) - 41.vue_v3_watch.html

与 watch 配置功能一致
监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调
默认初始时不执行回调, 但可以通过配置 immediate 为 true, 来指定初始时立即执行第一次
通过配置 deep 为 true, 来指定深度监视

## watchEffect 函数(vue3 新增)

不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据
默认初始时就会执行第一次, 从而可以收集需要监视的数据
监视数据发生变化时回调

vue3 的鉤子，在 setup 當中使用的時候，名字就變更要多加 onXXXX 這樣就稱之 Composition API。
如果與 setup 同層，那就是 vue2 option api(配置式)，但也可以用新的 hook 名稱。
Vue2 的一些 hook name 已經改掉

-   beforeDestory 改名 beforUnmount
-   destoryed 改名 unmounted
    v2 / v3 hook 混用，v3 hook 優先

自定義 hook 就是程式複用，類似 mixin。可以將 setup 當中一些實現的項目包裝成 useXXX.js
在透過 import 回去使用即可。

## toRef & to Refs(可說明)

把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref

应用: 当从合成函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用

问题: reactive 对象取出的所有属性值都是非响应式的

解决: 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性

## shallowReactive 与 shallowRef(不說明，避免搞混)

### shallowReactive : 只处理了对象内最外层属性的响应式(也就是浅响应式)

### shallowRef: 只处理了 value 的响应式, 不进行对象的 reactive 处理

### 什么时候用浅响应式呢?

-   一般情况下使用 ref 和 reactive 即可
-   如果有一个对象数据, 结构比较深, 但变化时只是外层属性变化 ===> shallowReactive，使用的時候不能同步變更物件結構第二層以上的資料，他不會有響應但仍然有變動，等畫面重渲染的時候會出問題。
-   如果有一个对象数据, 后面会产生新的对象来替换 ===> shallowRef，不處理物件響應式資料。

## readonly 与 shallowReadonly(可說明)

readonly : 深度只读数据，物件不能修改
shallowReadonly : 浅只读数据，深度物件資料可以變動

## toRaw 与 markRaw(不說明)

### toRaw

返回由 reactive 或 readonly 方法转换成响应式代理的普通对象。
这是一个还原方法，可用于临时读取，访问不会被代理/跟踪，写入时也不会触发界面更新。

### markRaw(永遠是非響應式)

标记一个对象，使其永远不会转换为代理。返回对象本身
应用场景:
有些值不应被设置为响应式的，例如复杂的第三方类实例或 Vue 组件对象。
当渲染具有不可变数据源的大列表时，跳过代理转换可以提高性能。

## customRef(不說明)

创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制

## provide 与 inject

提供跨層級組件間通信，但各組件是有關連性的才可以。
從上往下傳的方式，上層 provider 下層透過 inject 取得注入。
但下往上，還是要透過 emit 往上

## 響應式資料判斷

-   isRef: 检查一个值是否为一个 ref 对象
-   isReactive: 检查一个对象是否是由 reactive 创建的响应式代理
-   isReadonly: 检查一个对象是否是由 readonly 创建的只读代理
-   isProxy: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理

## Vue3 新組件 API

### Fragment

在 Vue2 中: 组件必须有一个根标签
在 Vue3 中: 组件可以没有根标签, 内部会将多个标签包含在一个 Fragment 虚拟元素中
好处: 减少标签层级, 减小内存占用

-   template 裡面沒有不用再寫 <div> 的跟標籤

### Teleport

Teleport 提供了一种干净的方法, 让组件的 html 在父组件界面外的特定标签(很可能是 body)下插入显示

-   使用類似圖片傳送放大的功能
-   或者某些訊息要顯示在額外的地方，標籤應該要放置在 index.html 上

https://chupai.github.io/posts/2104/teleport/
https://ithelp.ithome.com.tw/m/articles/10274013

### Suspense (暫時不使用)，新功能還在實驗中

-   defineAsyncComponent，可以採用動態引入，也就是非同步引入各組件。
-   用戶體驗容易覺得資料缺少，這樣反而怪怪的。
-   內置函數，直接用 <Suspense>

## 将原来的全局 API 转移到应用对象

-   app.component()
-   app.config()
-   app.directive()
-   app.mount()
-   app.unmount()
-   app.use()

## 模板语法变化

-   動畫名稱有變動
-   keyCodes 移除
-   v-on:native 移除

## 功能使用

當使用 props 傳遞 image 路徑時， components 使用方式要使用 require 的方式，不然會破圖。
e.g <img :src="require(`@/assets/${imgUrl}`)"/>
