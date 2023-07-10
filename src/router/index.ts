import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/newsDetails',
    name: 'newsDetails',
    component: ()=>import('../views/NewsDetails.vue')
  },
  {
    path: '/loginPage',
    name: 'loginPage',
    component: ()=>import('../views/LoginPage.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
