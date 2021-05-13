<template>
  <ul>
    <li v-for="(todo,index) in todosList" :key="index">
      <input :checked="todo.done" @change="toggle(todo)" type="checkbox">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li><input @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
    <button @click="remove">Remove Selected Items</button>
       <p>You chose {{ getFlavor}}</p>
  </ul>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    todosList () {
      return this.$store.state.todos.list
    },
    ...mapGetters({
      getFlavor: 'todos/getFlavor'
    })
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    remove (e) {
      const getSelectedTodos = this.todosList.filter(todo => todo.done === true)
      console.log(getSelectedTodos)
      getSelectedTodos.forEach((element) => {
        this.$store.commit('todos/remove', element)
      })
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
