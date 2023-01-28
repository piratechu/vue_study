import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TransmodView from '../views/TransmodView.vue'
import TransGroupView from '../views/TransGroupView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/TransMode',
    name: 'TransMode',
    component: TransmodView
  },
  {
    path: '/TransGroup',
    name: 'TransGroup',
    component: TransGroupView
  }    
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
