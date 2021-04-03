import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _40508f8b = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _be22a54c = () => interopDefault(import('../pages/exhibit/index.vue' /* webpackChunkName: "pages/exhibit/index" */))
const _3445e66c = () => interopDefault(import('../pages/visitor.vue' /* webpackChunkName: "pages/visitor" */))
const _7b9d8b45 = () => interopDefault(import('../pages/exhibit/_id/index.vue' /* webpackChunkName: "pages/exhibit/_id/index" */))
const _60086a50 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _40508f8b,
    name: "about"
  }, {
    path: "/exhibit",
    component: _be22a54c,
    name: "exhibit"
  }, {
    path: "/visitor",
    component: _3445e66c,
    name: "visitor"
  }, {
    path: "/exhibit/:id",
    component: _7b9d8b45,
    name: "exhibit-id"
  }, {
    path: "/",
    component: _60086a50,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
