<template>
    <input
      type="text"
      class="form-control"
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
