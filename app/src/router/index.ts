import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/level1',
      name: 'level1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LevelOne.vue'),
     },
     {

      path: '/HS',
      name: 'HS',
      component: () => import('../views/HSView.vue'),
    },
    {

      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPlease.vue'),
    },
    {

     path: '/LSelect',
     name: 'level select',
     component: () => import('../views/LevelSelect.vue'),
   },
  ],
})

export default router


