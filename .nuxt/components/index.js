export { default as Navigation } from '../..\\components\\Navigation.vue'

export const LazyNavigation = import('../..\\components\\Navigation.vue' /* webpackChunkName: "components_Navigation" */).then(c => c.default || c)
