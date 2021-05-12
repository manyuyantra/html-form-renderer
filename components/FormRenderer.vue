<template>
<div class="parent">
  <form id="dynamic-form">
    <div v-for="(item,key,index) in custFieldInfo" :key="index">
        <ElInputText v-if="item.component === 'ElInputText'" :attrs="item.attributes" v-model="formModelObj[key]" />
        <ElRadioBtn v-if="item.component === 'ElRadioBtn'" :items="item.arrayValues" :attrs="item.attributes" v-model="formModelObj[key]" />
        <ElDropdown v-if="item.component === 'ElDropdown'" :items="item.arrayValues" :attrs="item.attributes" v-model="formModelObj[key]" />
        <ElCheckBox v-if="item.component === 'ElCheckBox'" :items="item.arrayValues" :attrs="item.attributes" @change="atChanged" />
        <ElInputTextArea v-if="item.component === 'ElInputTextArea'" :attrs="item.attributes" v-model="formModelObj[key]" />
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
      this.$store.commit('customer/add', storeObj)
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
    }
  },
  props: ['custFieldInfo']
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
