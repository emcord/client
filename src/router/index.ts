import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import TheContainer from '~/layouts/TheContainer.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('~/pages/auth/Login.vue'),
  },
  {
    path: '/register',
    component: () => import('~/pages/auth/Register.vue'),
  },
  {
    path: '/channels',
    component: TheContainer,
    children: [{
      path: ':server/:channel',
      component: () => import('~/pages/channels/index.vue'),
    }, {
      path: '@me',
      component: () => import('~/pages/channels/Me.vue'),
    }],
  },
]

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
})
