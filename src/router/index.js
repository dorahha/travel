import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home/Home.vue'
import City from '@/components/pages/city/City.vue'
import Detail from '@/components/pages/detail/Detail.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id', // 动态路由
      name: 'Detail',
      component: Detail
    }
  ],
  // 每次做页面切换的时候都让页面的初始X和y为0
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
