<template>
    <input
      type="text"
      @input='handleInput'
    />
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
