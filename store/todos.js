export const state = () => ({
  list: [],
  flavor: 'HelloWorld'
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo))
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}

export const getters = {
  getFlavor: (state) => {
    return state.flavor
  }
}
