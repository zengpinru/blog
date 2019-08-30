import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes
  })
}
