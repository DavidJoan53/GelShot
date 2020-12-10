import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d44c5902 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _12d15208 = () => interopDefault(import('../pages/gelatinas/index.vue' /* webpackChunkName: "pages/gelatinas/index" */))
const _10704da7 = () => interopDefault(import('../pages/gomas/index.vue' /* webpackChunkName: "pages/gomas/index" */))
const _98aa312c = () => interopDefault(import('../pages/pagos/index.vue' /* webpackChunkName: "pages/pagos/index" */))
const _58d0f712 = () => interopDefault(import('../pages/prueba/index.vue' /* webpackChunkName: "pages/prueba/index" */))
const _96a75d82 = () => interopDefault(import('../pages/admin/detalles.vue' /* webpackChunkName: "pages/admin/detalles" */))
const _39da5a16 = () => interopDefault(import('../pages/gelatinas/detalles.vue' /* webpackChunkName: "pages/gelatinas/detalles" */))
const _61ddc617 = () => interopDefault(import('../pages/gomas/detalles.vue' /* webpackChunkName: "pages/gomas/detalles" */))
const _fb6d9d18 = () => interopDefault(import('../pages/pagos/detalles.vue' /* webpackChunkName: "pages/pagos/detalles" */))
const _03ea65ff = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/admin",
    component: _d44c5902,
    name: "admin"
  }, {
    path: "/gelatinas",
    component: _12d15208,
    name: "gelatinas"
  }, {
    path: "/gomas",
    component: _10704da7,
    name: "gomas"
  }, {
    path: "/pagos",
    component: _98aa312c,
    name: "pagos"
  }, {
    path: "/prueba",
    component: _58d0f712,
    name: "prueba"
  }, {
    path: "/admin/detalles",
    component: _96a75d82,
    name: "admin-detalles"
  }, {
    path: "/gelatinas/detalles",
    component: _39da5a16,
    name: "gelatinas-detalles"
  }, {
    path: "/gomas/detalles",
    component: _61ddc617,
    name: "gomas-detalles"
  }, {
    path: "/pagos/detalles",
    component: _fb6d9d18,
    name: "pagos-detalles"
  }, {
    path: "/",
    component: _03ea65ff,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
