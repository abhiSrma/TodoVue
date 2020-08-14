import Vue from 'vue'
import Router from 'vue-router'
import TodoContainer from '@/components/TodoContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todo',
      component: TodoContainer
    }
  ]
})
