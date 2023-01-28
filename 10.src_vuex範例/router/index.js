import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/slot',
  //   name: 'slot',
  //   component:SlotView,
  //   children: [
  //     {
  //       path: 'basic',
  //       component:SlotBasicView,
  //     },
  //     {
  //       path: 'name',
  //       component:SlotNameView,
  //     },
  //     {
  //       path: 'scoped',
  //       component:SlotScopedView,
  //     },

  //   ],
  // },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
