<template>
  <div>
      <CustomerInputForm v-bind:count="count"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 5
    }
  }
}
</script>
