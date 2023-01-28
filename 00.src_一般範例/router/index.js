import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PropsView from '../views/PropsView.vue'
import MixinView from '../views/MixinView.vue'
import ComposView from '../views/ComposView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/propos',
    component: PropsView

  },
  {
    path:'/mixinfo',
    component: MixinView
  },
  {
    path:'/composinfo',
    component: ComposView
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
