<template>
  <div>
    <div v-for="(item,index) in items" :key="index">
    <label :for="item">
      <input type="radio" :id="item" :value="item" :name="name">
      {{ item }}
    </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items', 'name']
}
</script>
