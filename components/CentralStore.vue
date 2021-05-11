<template>
    <div>
        Hello Store {{ customers }}
    </div>
</template>

<script>
export default {
  computed: {
    customers () {
      return this.$store.state.customer.list
    }
  }
}
</script>
