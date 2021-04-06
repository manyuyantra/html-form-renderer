export const state = () => ({
    customer: []
  })
  
  export const mutations = {
    add (state, customer) {
      state.list.push({
        customer,
        done : false
      })
    },
    remove (state, { customer }) {
      state.list.splice(state.list.indexOf(customer))
    },
    toggle (state, customer) {
      todo.done = !todo.done
    }
  }