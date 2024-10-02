import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue'
import about from '@/views/about.vue'
import contacts from '@/views/contacts.vue'
import projects from '@/views/projects.vue'
import Techs from '@/views/Techs.vue'
import Types from '@/views/Types.vue'
import Details from '@/views/Details.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },

    {
      path: '/chi-siamo',
      name: 'about',
      component: about
    },

    {
      path: '/contatti',
      name: 'contacts',
      component: contacts
    },

    {
      path: '/i-miei-progetti',
      name: 'projects',
      component: projects
    },

    {
      path: '/tecnologie',
      name: 'techs',
      component: Techs
    },

    {
      path: '/tipi',
      name: 'types',
      component: Types
    },

    {
      path: '/dettagli-progetto/:slug',
      name: 'details',
      component: Details
    }
  ]
})

export default router
