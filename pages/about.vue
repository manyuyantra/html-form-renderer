<template>
  <div>
    About Us
    <h1>Mountains</h1>
    <LazyMountainList v-if="show" />
    <button v-if="!show" @click="showList">Show List</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    showList () {
      this.show = true
    }
  }
}
</script>
