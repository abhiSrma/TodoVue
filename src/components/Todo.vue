/* eslint-disable */
<template>
  <div>
    <todo-list v-bind:todos='todos'></todo-list>
  </div>
</template>

<script type = 'text/javascript' >
import TodoList from './TodoList'
export default {
  components: {
    TodoList
  },
  data () {
    return {
      todos: [
        {
          title: 'Todo A',
          project: 'Project A',
          done: false
        },
        {
          title: 'Todo B',
          project: 'Project B',
          done: true
        },
        {
          title: 'Todo C',
          project: 'Project C',
          done: false
        },
        {
          title: 'Todo D',
          project: 'Project D',
          done: false
        }
      ]
    }
  }
}
</script>
<style>
</style>
