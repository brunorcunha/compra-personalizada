import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Produtos'
  },
  {
    path: '/Produtos',
    name: 'List',
    component: List
  },
  {
    path: '/Produto/:breed/:subBreed?',
    name: 'Product',
    component: Product
  },
  {
    path: '/Carrinho',
    name: 'Cart',
    component: Cart
  },
]

const scrollBehavior = (to, from, savedPosition) => savedPosition ? savedPosition : { x: 0, y: 0 }

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior
})

export default router
