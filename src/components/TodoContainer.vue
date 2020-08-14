/* eslint-disable */
<template>
  <div>
    <todo-list v-bind:todos='todos'></todo-list>
    <create-todo v-on:add-todo='addTodo'></create-todo>
  </div>
</template>

<script type = 'text/javascript' >
import TodoList from './TodoList'
import CreateTodo from './CreateTodo'
export default {
  components: {
    TodoList,
    CreateTodo
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
  },
  methods: {
    addTodo (todo) {
      let {title, project, done} = todo
      this.todos.push({
        title, project, done
      })
    }
  }
}
</script>
<style>
</style>
