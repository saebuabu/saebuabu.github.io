import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../components/StartPage.vue'

const routes = [
  {
    path: '/',
    name: 'StartPage',
    component: StartPage,
    props: {
      msg: 'Start Pagina'
    }
  },
  {
    path: '/ai',
    name: 'ai',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/AiPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router