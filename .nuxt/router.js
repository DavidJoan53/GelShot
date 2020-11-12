import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f93d7614 = () => interopDefault(import('..\\pages\\gelatinas\\index.vue' /* webpackChunkName: "pages/gelatinas/index" */))
const _72915c92 = () => interopDefault(import('..\\pages\\gomas\\index.vue' /* webpackChunkName: "pages/gomas/index" */))
const _ea601f58 = () => interopDefault(import('..\\pages\\pagos\\index.vue' /* webpackChunkName: "pages/pagos/index" */))
const _bd599f56 = () => interopDefault(import('..\\pages\\prueba\\index.vue' /* webpackChunkName: "pages/prueba/index" */))
const _39595868 = () => interopDefault(import('..\\pages\\gelatinas\\detalles.vue' /* webpackChunkName: "pages/gelatinas/detalles" */))
const _340f8807 = () => interopDefault(import('..\\pages\\gomas\\detalles.vue' /* webpackChunkName: "pages/gomas/detalles" */))
const _2111884a = () => interopDefault(import('..\\pages\\pagos\\detalles.vue' /* webpackChunkName: "pages/pagos/detalles" */))
const _1c648f74 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _f93d7614,
    name: "gelatinas"
  }, {
    path: "/gomas",
    component: _72915c92,
    name: "gomas"
  }, {
    path: "/pagos",
    component: _ea601f58,
    name: "pagos"
  }, {
    path: "/prueba",
    component: _bd599f56,
    name: "prueba"
  }, {
    path: "/gelatinas/detalles",
    component: _39595868,
    name: "gelatinas-detalles"
  }, {
    path: "/gomas/detalles",
    component: _340f8807,
    name: "gomas-detalles"
  }, {
    path: "/pagos/detalles",
    component: _2111884a,
    name: "pagos-detalles"
  }, {
    path: "/",
    component: _1c648f74,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
