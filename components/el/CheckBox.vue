<template>
  <div>
    <label v-for="(item,index) in items" :key="index" :for="item">
      <input
        type="checkbox"
        :id="toLowerCase(item)"
        :value="item"
        v-bind="attrs"
        v-model="selectedValues"
        @change="handleInput">
      {{ item }}
    </label>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedValues: []
    }
  },
  methods: {
    handleInput (e) {
      const obj = {}
      obj[this.attrs.name] = this.selectedValues
      this.$emit('change', obj)
    },
    toLowerCase (str) {
      return str.toLowerCase()
    }
  },
  props: ['items', 'attrs']
}
</script>
