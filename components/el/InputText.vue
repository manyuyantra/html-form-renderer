<template>
  <div>
    <label :for="'ex-' + item">{{ item }}</label>
    <input
      :id="'ex-' + item"
      type="text"
      class="form-control"
      @input='handleInput'
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
  props: ['item', 'obj', 'modelValue']
}
</script>
