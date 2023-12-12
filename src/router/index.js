import { createRouter, createWebHistory } from 'vue-router'

//Vue.use(Router);
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/Newbook',
    name: 'Newbook',
    component: () => import('../views/Newbooks.vue')
  },{
    path: '/ProductList',
    name: 'ProductList',
    component: () => import('../views/ProductList.vue')
  },{
    path: '/Cart',
    name: 'Cart',
    component: () => import('../views/theCart.vue')
  },{
    path: '/AccountPage',
    name: 'AccountPage',
    component: () => import('../views/AccountPage.vue')
  },{
    path: '/BookDetails',
    name: 'BookDetails',
    component: () => import('../views/BookDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
