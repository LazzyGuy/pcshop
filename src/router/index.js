import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Join from '../components/loginSign.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
     }
    // {
    //   path: '/join',
    //   name: 'join',
    //   component: Join
    // }
  ]
})
