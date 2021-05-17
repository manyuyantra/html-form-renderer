<template>
<div class="parent">
    formModelObj {{ formModelObj }}
  <FormTags :storeName="storeName" @click="showCustomer"/>
  <form id="dynamic-form">
    <div v-for="(item,key,index) in formSpec" :key="index">
        <ElInputText v-if="item.component === 'ElInputText'" :attrs="item.attributes" v-model="formModelObj[key]" :value="formModelObj[key]" />
        <ElRadioBtn v-if="item.component === 'ElRadioBtn'" :items="item.arrayValues" :attrs="item.attributes" v-model="formModelObj[key]" :value="formModelObj[key]" />
        <ElDropdown v-if="item.component === 'ElDropdown'" :items="item.arrayValues" :attrs="item.attributes" v-model="formModelObj[key]" :value="formModelObj[key]" />
        <ElCheckBox v-if="item.component === 'ElCheckBox'" :items="item.arrayValues" :attrs="item.attributes" @change="atChanged" :value="formModelObj[key]" />
        <ElInputTextArea v-if="item.component === 'ElInputTextArea'" :attrs="item.attributes" v-model="formModelObj[key]" :value="formModelObj[key]" />
        <ElButton v-if="item.component === 'ElButton'" :attrs="item.attributes" @click="atClicked"/>
    </div>
  </form>
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
    saveCustomer (e) {
      // this.$emit('click', this.formModelObj)
      const storeObj = { ...this.formModelObj }
      this.$store.commit(this.storeName + '/add', storeObj)
    },
    atChanged (updatedObj) {
      this.formModelObj = { ...this.formModelObj, ...updatedObj }
    },
    atClicked (e) {
      if (e.target.type === 'submit') {
        e.preventDefault()
        this.saveCustomer()
      }
      if (e.target.type === 'reset') {
        console.log(e.target.type)
        document.getElementById('dynamic-form').reset()
      }
    },
    showCustomer (customer) {
      this.formModelObj = customer
      console.log(this.formModelObj)
    }
  },
  props: ['formSpec', 'storeName']
}
</script>

<style scoped>
.parent{
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}
</style>
