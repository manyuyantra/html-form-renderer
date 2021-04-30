<template>
  <div>
    <h1>Hello World<input type=text v-model="reactive" >
    {{ reactive }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      reactive: 'sdsd'
    }
  }
}
</script>
