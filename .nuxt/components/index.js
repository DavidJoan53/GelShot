export { default as Cards } from '../..\\components\\Cards.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Navigation } from '../..\\components\\Navigation.vue'
export { default as Pruebas } from '../..\\components\\Pruebas.vue'

export const LazyCards = import('../..\\components\\Cards.vue' /* webpackChunkName: "components_Cards" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components_Header" */).then(c => c.default || c)
export const LazyNavigation = import('../..\\components\\Navigation.vue' /* webpackChunkName: "components_Navigation" */).then(c => c.default || c)
export const LazyPruebas = import('../..\\components\\Pruebas.vue' /* webpackChunkName: "components_Pruebas" */).then(c => c.default || c)
