export { default as Cards } from '../../components/Cards.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as Product } from '../../components/Product.vue'
export { default as Pruebas } from '../../components/Pruebas.vue'
export { default as TinyCards } from '../../components/TinyCards.vue'

export const LazyCards = import('../../components/Cards.vue' /* webpackChunkName: "components/Cards" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyNavigation = import('../../components/Navigation.vue' /* webpackChunkName: "components/Navigation" */).then(c => c.default || c)
export const LazyProduct = import('../../components/Product.vue' /* webpackChunkName: "components/Product" */).then(c => c.default || c)
export const LazyPruebas = import('../../components/Pruebas.vue' /* webpackChunkName: "components/Pruebas" */).then(c => c.default || c)
export const LazyTinyCards = import('../../components/TinyCards.vue' /* webpackChunkName: "components/TinyCards" */).then(c => c.default || c)
