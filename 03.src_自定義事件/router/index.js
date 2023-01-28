import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RefView from '../views/RefView.vue'


const routes = [
  {
    path: '/',
    name: 'emit',
    component: HomeView
  },
  {
    path: '/ref',
    name: 'ref',
    component: RefView
  }  
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
