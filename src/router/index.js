import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: () => import('@/pages/HomeView.vue'),
        WaitingOrders: () => import('@/pages/WaitingOrdersView.vue')
      }
    },
    {
      path: '/order/:orderId',
      name: 'order',
      component: () => import('@/components/OrderShow.vue') 
    },
    {
      path: '/orders-active',
      name: 'orders-active',
      component: () => import('@/components/OrdersActive.vue') 
    },

    { path: '/orders-completed',
      name: 'orders-completed',
      component: () => import('@/components/OrdersCompleted.vue') 
    },
    {
      path: '/systems',
      name: 'systems',
      component: () => import('@/pages/SystemsView.vue'),
    },
    {
      path: '/kiosks',
      name: 'kiosks',
      component: () => import('@/pages/KiosksView.vue'),
    },
    {
      path: '/passport',
      name: 'passport',
      component: () => import('@/pages/PassportView.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('@/pages/HelpView.vue')
    },
    {
      path: '/closeLab',
      name: 'closeLab',
      component: () => import('@/pages/CloseLab.vue')
    },
  ]
})

export default router
