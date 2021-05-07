export const state = () => ({
  list: []
})

export const mutations = {
  add (state, customer) {
    state.list.push(customer)
  },
  remove (state, { customer }) {
    state.list.splice(state.list.indexOf(customer))
  }
}
