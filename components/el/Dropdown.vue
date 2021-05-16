<template>
    <div>
        <label :for="attrs.name">
            {{ attrs.labelValue }}
         </label>
        <select
        v-bind="attrs"
        @input="handleInput">
        <option v-for="(item, index) in items" :selected="item === value"   :key="index" :for="item">{{ item }}</option>
        </select>
    </div>
</template>

<script>
export default {
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  },
  props: ['items', 'attrs', 'value']
}
</script>
