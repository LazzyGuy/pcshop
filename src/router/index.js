import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Cart from '../components/cart.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
     },
     {
      path: '/cart',
      name: 'cart',
      component: Cart
     }
  ]
})
