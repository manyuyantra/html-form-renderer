<template>
  <div>
    <!-- <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p> -->
    <!-- <h1>Input Message Page</h1>
    <p>Parent Element{{ form.items }} </p> -->
    <InputMessage v-bind:form="payload"/>]
  </div>
</template>

<script>
export default {
  data () {
    return {
      payload: {
        items: [{ message: 'Foo' }, { message: 'Bar' }]
      }
    }
  }
}
</script>
