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
      component: () => import('../views/LevelOne.vue'),
     },
     {
      path: '/level2',
      name: 'level2',
      component: () => import('../views/LevelTwo.vue'),
     },
     {
      path: '/level3',
      name: 'level3',
      component: () => import('../views/LevelThree.vue'),
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
     name: 'levelSelect',
     component: () => import('../views/LevelSelect.vue'),
   },
  ],
})

export default router


