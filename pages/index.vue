<template>
  <main>
    <h1>Home page</h1>
    <a href="https://nuxtjs.org">External Link to another page</a>
    <input type="button" value="Save Customer" @click="saveCustomer">
    bb {{ this.$store.state.customer.list }}
  </main>
</template>

<script>
export default {
  computed: {
    customers () {
      return this.$store.state.customer.list
    }
  },
  methods: {
    saveCustomer (e) {
      this.$store.commit('customer/add', 'hello')
    }
  }
}
</script>
