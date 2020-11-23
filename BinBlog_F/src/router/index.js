import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Demo1 from '@/components/MarkdownDemo1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test
    },
    {
      path: '/demo1',
      name: 'Demo1',
      component: Demo1
    }
  ]
})
