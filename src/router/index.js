import { createRouter, createWebHistory } from 'vue-router'
import Home         from '../views/Home.vue'
import About        from '../views/About.vue'
import Contact      from '../views/Contact.vue'
import Vikar        from '../views/Vikar.vue'
import JobTest      from '../views/JobTest.vue'
import ToBeVikar    from '../views/ToBeVikar.vue'
import VikarService from '../views/VikarService.vue'
import Rekrutering  from '../views/Rekrutering.vue'
import JobChildOne  from '../views/JobChildOne.vue'
import JobChildTwo  from '../views/JobChildTwo.vue'
import JobChildTree from '../views/JobChildTree.vue'
import TryHire      from '../views/TryHire.vue'

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
      meta: {
        breadcrumb: 'About'
      }
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
      path: '/jobtest/JobChildOne',
      name: 'JobChildOne',
      component: JobChildOne,
    },
    {
      path: '/jobtest/JobChildTwo',
      name: 'JobChildTwo',
      component: JobChildTwo,
    },
    {
      path: '/jobtest/JobChildTree',
      name: 'JobChildTree',
      component: JobChildTree,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/tryhire',
      name: 'TryHire',
      component: TryHire,
    },  
  ]
})

export default router
