import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Personal',
      component: () => import('@/views/personal')
    },
    {
      path: '/legal',
      name: 'Legal',
      component: () => import('@/views/personal/legal')
    },
    {
      path: '/noData',
      name: 'NoData',
      component: () => import('@/views/personal/noData')
    }
  ]
})
