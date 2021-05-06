<template>
  <div>
    <div v-for="(item,key,index) in custFieldInfo" :key="index">
        <div v-if="item.type === 'String'">
          <label :for="item.id"> </label>
          <component :is="item.component" v-model="formModelObj[key]" v-bind="item.attributes"/>
        </div>
        <ElRadioBtn v-if="item.component === 'ElRadioBtn'" :items="item.arrayValues" :attrs="item.attributes" v-model="formModelObj[key]" />
        <ElDropdown v-if="item.component === 'ElDropdown'" :items="item.arrayValues" :attrs="item.attributes" v-model="formModelObj[key]" />
        <ElCheckBox v-if="item.component === 'ElCheckBox'" :items="item.arrayValues" :attrs="item.attributes" @change="atChanged" />
        <ElInputTextArea v-if="item.component === 'ElInputTextArea'" :attrs="item.attributes" v-model="formModelObj[key]" />
    </div>
    <input type="button" value="Click me" @click="emitCustomer">
   formModelObj {{  formModelObj}}
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
    },
    atChanged (updatedObj) {
      this.formModelObj = { ...this.formModelObj, ...updatedObj }
    }
  },
  props: ['custFieldInfo']
}
</script>
