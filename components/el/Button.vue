<template>
    <button
     v-bind="attrs"
     @click='handleInput'
    >{{attrs.value}}
    </button>
</template>

<script>
export default {
  methods: {
    handleInput (e) {
      this.$emit('click')
    }
  },
  props: ['attrs']
}
</script>
