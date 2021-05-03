<template>
  <div>
    <label v-for="(item,index) in items" :key="index" :for="item">
      <input
        type="checkbox"
        :id="toLowerCase(item)"
        :value="item"
        v-bind="attrs"
        :checked="index === 0 ? true : false"
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
    }
  },
  props: ['items', 'attrs']
}
</script>
