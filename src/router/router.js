import Home from '../views/home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '*',
    component: () => import('../views/error/404.vue')
  }
]
