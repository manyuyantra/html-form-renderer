<template>
<div>
    <label :for="attrs.name">
            {{ attrs.labelValue }}
    </label>
    <textarea
      type="text"
      row="3"
      v-bind="attrs"
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
  props: ['attrs']
}
</script>
