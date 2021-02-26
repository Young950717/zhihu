import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'demo',
    component: () => import(/* webpackChunkName: "demo" */ '../views/demo.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
