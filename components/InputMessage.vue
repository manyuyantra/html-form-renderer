<template>
  <div>
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
    <div v-for="(item,index) in form.items" :key="index">
        <input v-model="item.message" placeholder="edit me" />
        <p>Message is: {{ item.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: []
    }
  },
  props: ['form']
}
</script>
