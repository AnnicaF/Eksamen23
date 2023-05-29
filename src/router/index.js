import { createRouter, createWebHistory } from 'vue-router'
import Home    from '../views/Home.vue'
import About   from '../views/About.vue'
import Job     from '../views/Job.vue'
import Contact from '../views/Contact.vue'
import Vikar from '../views/Vikar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/vikar',
      name: 'Vikar',
      component: Vikar,
    },
    {
      path: '/job',
      name: 'Job',
      component: () => import('../views/Job.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    }
  ]
})

export default router
