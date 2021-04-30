<template>
      <input
        type="radio"
        @input="handleInput">
</template>

<script>
export default {
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
