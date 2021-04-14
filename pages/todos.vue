<template>
  <div id="123">
    <todos />
    <p v-if="$fetchState.pending">Loading...</p>
    {{ customer }}
  </div>
</template>
<script>

export default {
  data () {
    return {
      customer: null
    }
  },
  beforeMount () {
    function Customer () {
      this.name = ''
      this.age = ''
      this.gender = []
    }
    this.customer = new Customer()
  },
  mounted () {
    console.log(this.customer)
  },
  async fetch () {
    this.customer = 'dfdf'
    await Promise.resolve(10)
  }
}
</script>
