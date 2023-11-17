import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CompositionExample from '../views/CompositionExample.vue'
import Details from '../views/Details.vue'

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
    },
    {
      path: '/posts/:id',
      name: 'Details',
      component: Details,
      props: true
    }
  ]
})

export default router
