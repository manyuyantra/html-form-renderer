<template>
  <div>
    <div v-for="(item,index) in items" :key="index">
    <label :for="item">
      <input
        type="radio"
        :id="item"
        :value="item"
        :name="name"
        :checked="index === 0 ? true : false"
        @input="handleInput">
      {{ item }}
    </label>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  },
  props: ['items', 'name']
}
</script>
