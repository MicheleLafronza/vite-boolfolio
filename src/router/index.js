import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue'
import about from '@/views/about.vue'
import contacts from '@/views/contacts.vue'

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
    }
  ]
})

export default router
