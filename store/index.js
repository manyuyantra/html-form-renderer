export const state = () => ({
  authenticated: false
})

export const getters = {
  isAuthenticated (state) {
    return state.auth.loggedIn
  },

  loggedInUser (state) {
    return state.auth.user
  },

  isUserAuthenticated (state) {
    return state.authenticated
  }
}

export const mutations = {
  setUserAuthenticated (state, authenticated) {
    state.authenticated = authenticated
    debugger
  }
}
