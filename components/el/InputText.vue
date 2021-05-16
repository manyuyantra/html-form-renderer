<template>
  <div>
    <label :for="attrs.name">{{ attrs.name }}</label>
    <input
      v-bind="attrs"
      type="text"
      class="form-control"
      @input="handleInput"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      customer: this.obj
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  },
  props: ['attrs', 'value']
}
</script>
