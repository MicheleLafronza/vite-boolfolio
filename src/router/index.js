import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue'
import about from '@/views/about.vue'
import contacts from '@/views/contacts.vue'
import projects from '@/views/projects.vue'

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
    }
  ]
})

export default router
