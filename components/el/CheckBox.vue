<template>
  <div>
    <label v-for="(item,index) in items" :key="index" :for="item">
      <input
        type="checkbox"
        :id="toLowerCase(item)"
        :value="item"
        v-bind="attrs"
        v-model="selectedValues"
        :checked="checkValue(item)"
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
    },
    checkValue (item) {
      if (this.value) {
        return this.value.filter(itemVal => itemVal === item)
      }
    }
  },
  watch: {
    value () {
      if (this.value.length) {
        this.selectedValues = this.value
      }
    }
  },
  props: ['items', 'attrs', 'value']
}
</script>
