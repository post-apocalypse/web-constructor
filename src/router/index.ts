import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BuilderView from '@/views/BuilderView.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from) {
    if (to.name !== from.name) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ top: 0 })
        }, 250)
      })
    }
  },
  routes: [
    {
      path: '/home',
      name: 'route.home',
      component: HomeView,
      alias: '/'
    },
    {
      path: '/builder',
      name: 'route.builder',
      component: BuilderView
    },
    {
      path: '/about',
      name: 'route.about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/:notFound(.*)',
      name: 'route.notFound',
      component: import('@/views/NotFoundView.vue')
    }
  ]
})
