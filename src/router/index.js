import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomeView.vue'),
      // children: [
      //   { path: 'orders/orders-active',
      //     name: 'orders-active',
      //     component: () => import('../components/OrdersActive.vue') 
      //   },
      //   { path: 'orders/orders-completed',
      //     name: 'orders-completed',
      //     component: () => import('../components/OrdersCompleted.vue') 
      //   }
      // ]
    },
    {
      path: '/orders-active',
      name: 'orders-active',
      component: () => import('../components/OrdersActive.vue') 
    },

    { path: '/orders-completed',
      name: 'orders-completed',
      component: () => import('../components/OrdersCompleted.vue') 
    },
    {
      path: '/systems',
      name: 'systems',
      component: () => import('../pages/SystemsView.vue'),
      children: [
        { path: 'links',
          name: 'links',
          component: () => import('../components/NavigationDrawerLeft.vue') 
        },
      ]
    },
    {
      path: '/kiosks',
      name: 'kiosks',
      component: () => import('../pages/KiosksView.vue'),
      children: [
        { path: 'links',
          name: 'links',
          component: () => import('../components/NavigationDrawerLeft.vue') 
        },
      ]
    },
    {
      path: '/passport',
      name: 'passport',
      component: () => import('../pages/PassportView.vue')
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../pages/HelpView.vue')
    },
    {
      path: '/closeLab',
      name: 'closeLab',
      component: () => import('../pages/CloseLab.vue')
    },
    // {
    //   path: '/*/links',
    //   name: 'links',
    //   // component: () => import('../components/NavigationDrawerLeft.vue')
    //   component: {
    //     LeftSideBar: () => import('../components/NavigationDrawerLeft.vue')
    //   }
    // }
  ]
})

export default router
