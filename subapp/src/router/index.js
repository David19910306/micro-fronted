import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/subapp/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/subapp/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/subapp/myComponent',
    name: 'MyComponent',
    component: () => import(/* webpackChunkName: "about" */ '../views/myComponent.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
