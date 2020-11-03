export { default as Cards } from '../../components/Cards.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Navigation } from '../../components/Navigation.vue'

export const LazyCards = import('../../components/Cards.vue' /* webpackChunkName: "components/Cards" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyNavigation = import('../../components/Navigation.vue' /* webpackChunkName: "components/Navigation" */).then(c => c.default || c)
