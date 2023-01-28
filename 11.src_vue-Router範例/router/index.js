import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NewsView from '../views/NewsView.vue'
import MessageView from '../views/MessageView.vue'
import NewsDetailView from '../views/NewsDetailView.vue'
import MsgDetailView from '../views/MsgDetailView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    //一級路由
    path: '/home',
    name: 'home',
    component: HomeView,
    //二級路由....(多級)
    children: [
      {
        path:'news',
        component: NewsView,
        children:[
          {
            path:"detail/:id",
            name:"home.news.detail",
            component: NewsDetailView,
            //獨享路由，只會影響單一路由
            // beforeEnter:((to, from ,next)=>{
              
            // }),
          }
        ]
      },{
        path:'message',
        name:'home.message',
        component: MessageView,
        //三級路由，props 傳遞
        children:[
          {
          path: 'detail/:id',
          name: 'hoem.msg.detail',
          component: MsgDetailView,
          //會將 params 參數將 props 傳遞給組件
          props : true
          //props 使用函數型式
          // props($route){
          //   return {id:$route.query.id, title:$route.query.id}
          // }
          }
        ]
      },
    ]
  },
  {
    path:'/about',
    name:'about',
    component: AboutView,
    meta:{ requiresAuth: true }
  },
  {
    path:'/login',
    name:'login',
    component:LoginView,

  }  

]

//https://router.vuejs.org/zh/guide/essentials/history-mode.html
//不同伺服器配置的方式可以參考此網站
const router = createRouter({
  //hash 模式， createWebHashHistory()
  //url 會出現特殊的符號 #，由於url沒有被送到伺服器，所以不需要特殊處理，但對於外部網站會有SEO(搜尋引擎最佳化)的影響
  //history(HTML5模式) 模式需要後端伺服器配合，否則以單頁模式的方式會出現 404 的錯誤。因為配置
  //的地址其實是不存在的。因為主要都是透過 vue Router 去控制顯示那些元件。
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//全局前置路由守衛
//會有三個參數 to,from,next
router.beforeEach((to, from, next)=>{
  //console.log(to, from, next)
  console.log("前置路由守衛")
  // if(to.name!= 'login' && localStorage.getItem('auth') === 'false')  next({name:'login'})
  // else next();
  //透過 meta 定義權限組
  //if(to.meta.requiresAuth) {alert('需要驗證權限'); next({name: 'login'})}
  //放行往下走
 next();
  
}
)

//全局解析守衛，類似 beforeEach，
// router.beforeResolve(async to =>{

// })

//全局後置路由守衛-每次路由切換後被調用
router.afterEach(()=>{
  console.log("後置路由守衛")
})

export default router
