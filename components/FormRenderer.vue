<template>
  <div>
    <div v-for="(item,key,index) in custFieldInfo" :key="index">
        <div v-if="item.type === 'String'">
          <label :for="item.id"> </label>
          <component :is="item.component" v-model="formModelObj[key]" v-bind="item.attributes"/>
        </div>
        <ElRadioBtn v-if="item.component === 'ElRadioBtn'" :items="item.arrayValues" :attrs="item.attributes" v-model="formModelObj[key]" />
        <Dropdown v-if="item.component === 'Dropdown'" :items="item.arrayValues" :attrs="item.attributes" v-model="formModelObj[key]" />
    </div>
    <input type="button" value="Click me" @click="emitCustomer">
  </div>
</template>

<script>
export default {
  data () {
    return {
      formModelObj: {}
    }
  },
  methods: {
    emitCustomer (e) {
      this.$emit('click', this.formModelObj)
    }
  },
  props: ['custFieldInfo']
}
</script>
