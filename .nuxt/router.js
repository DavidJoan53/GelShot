import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _14ef7f02 = () => interopDefault(import('..\\pages\\gelatinas\\index.vue' /* webpackChunkName: "pages/gelatinas/index" */))
const _62b379c0 = () => interopDefault(import('..\\pages\\gomas\\index.vue' /* webpackChunkName: "pages/gomas/index" */))
const _3fcac43f = () => interopDefault(import('..\\pages\\gelatinas\\detalles.vue' /* webpackChunkName: "pages/gelatinas/detalles" */))
const _58c6775e = () => interopDefault(import('..\\pages\\gomas\\detalles.vue' /* webpackChunkName: "pages/gomas/detalles" */))
const _0410985d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/gelatinas",
    component: _14ef7f02,
    name: "gelatinas"
  }, {
    path: "/gomas",
    component: _62b379c0,
    name: "gomas"
  }, {
    path: "/gelatinas/detalles",
    component: _3fcac43f,
    name: "gelatinas-detalles"
  }, {
    path: "/gomas/detalles",
    component: _58c6775e,
    name: "gomas-detalles"
  }, {
    path: "/",
    component: _0410985d,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
