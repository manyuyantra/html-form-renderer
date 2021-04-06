<template>
  <div>
    <li v-for="(item,index) in count" :key="index">
      <label :for="'ssd' + item">Male {{ index }}</label>
      <input type="text" :id="'ssd' + item" name="gender" /><br/>
    </li>
    </div>
</template>

<script>
export default {
  props: ['count']
}
</script>
