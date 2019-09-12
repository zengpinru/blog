import Home from '../views/home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () => import('../views/article.vue')
  },
  {
    path: '*',
    component: () => import('../views/error/404.vue')
  }
]
