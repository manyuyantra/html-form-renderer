<template>
    <div>
        <label for="Work">
        <select
        v-bind="attrs"
        @input="handleInput">
        <option v-for="(item, index) in items"  :key="index" :for="item">{{ item }}</option>
        </select>
        </label>
    </div>
</template>

<script>
export default {
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  },
  props: ['items', 'attrs']
}
</script>
