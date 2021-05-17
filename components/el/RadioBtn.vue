<template>
  <div>
    <label v-for="(item,index) in items" :key="index" :for="item">
      <input
        type="radio"
        :id="toLowerCase(item)"
        :value="item"
        v-bind="attrs"
        :checked="checkValue(item,index)"
        @input="handleInput">
      {{ item }}
    </label>
  </div>
</template>

<script>
export default {
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    toLowerCase (str) {
      return str.toLowerCase()
    },
    checkValue (item, index) {
      if (this.value) {
        return (item === this.value)
      } else {
        return (index === 0)
      }
    }
  },
  props: ['items', 'attrs', 'value']
}
</script>
