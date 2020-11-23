import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Demo1 from '@/components/MarkdownDemo1'
import HeadBar from '@/components/HeadBar'
import HeadBar2 from '@/components/HeadBar copy'

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
    },
    {
      path: '/headbar',
      name: 'HeadBar',
      component: HeadBar
    },
    {
      path: '/headbar2',
      name: 'HeadBar2',
      component: HeadBar2
    },
  ]
})
