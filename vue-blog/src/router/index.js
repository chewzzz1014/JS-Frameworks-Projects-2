import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CompositionExample from '../views/CompositionExample.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/composition-example',
      name: 'CompositionExample',
      component: CompositionExample
    }
  ]
})

export default router
