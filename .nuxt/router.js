import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8d63311e = () => interopDefault(import('../pages/gelatinas/index.vue' /* webpackChunkName: "pages/gelatinas/index" */))
const _1c9a7f90 = () => interopDefault(import('../pages/gomas/index.vue' /* webpackChunkName: "pages/gomas/index" */))
const _a00e3fe6 = () => interopDefault(import('../pages/gelatinas/detalles.vue' /* webpackChunkName: "pages/gelatinas/detalles" */))
const _0423df8e = () => interopDefault(import('../pages/gomas/detalles.vue' /* webpackChunkName: "pages/gomas/detalles" */))
const _7f130ab0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _8d63311e,
    name: "gelatinas"
  }, {
    path: "/gomas",
    component: _1c9a7f90,
    name: "gomas"
  }, {
    path: "/gelatinas/detalles",
    component: _a00e3fe6,
    name: "gelatinas-detalles"
  }, {
    path: "/gomas/detalles",
    component: _0423df8e,
    name: "gomas-detalles"
  }, {
    path: "/",
    component: _7f130ab0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
