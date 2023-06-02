import { createRouter, createWebHistory } from 'vue-router'
import Home         from '../views/Home.vue'
import About        from '../views/About.vue'
import Contact      from '../views/Contact.vue'
import Vikar        from '../views/Vikar.vue'
import JobTest      from '../views/JobTest.vue'
import ToBeVikar    from '../views/ToBeVikar.vue'
import VikarService from '../views/VikarService.vue'
import Rekrutering  from '../views/Rekrutering.vue'

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
      path: '/ToBeVikar',
      name: 'ToBeVikar',
      component: ToBeVikar,
    },
    {
      path: '/Rekrutering',
      name: 'Rekrutering',
      component: Rekrutering,
    },
    {
      path: '/VikarService',
      name: 'VikarService',
      component: VikarService,
    },
    {
      path: '/Rekrutering',
      name: 'Rekrutering',
      component: Rekrutering,
    },
    {
      path: '/jobtest',
      name: 'JobTest',
      component: JobTest,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    }
  ]
})

export default router
