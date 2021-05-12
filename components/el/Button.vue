<template>
    <input
     v-bind="attrs"
     @click="handleSubmit"
    >
</template>

<script>
export default {
  methods: {
    handleSubmit (e) {
      this.$emit('click', e)
    }
  },
  props: ['attrs']
}
</script>
