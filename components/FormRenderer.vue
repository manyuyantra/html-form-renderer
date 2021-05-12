<template>
  <form>
    <div v-for="(item,key,index) in custFieldInfo" :key="index">
        <div v-if="item.component === 'InputText'">
          <label :for="item.id"> </label>
          <component :is="item.component" v-model="formModelObj[key]" v-bind="item.attributes"/>
        </div>
        <ElRadioBtn v-if="item.component === 'ElRadioBtn'" :items="item.arrayValues" :attrs="item.attributes" v-model="formModelObj[key]" />
        <ElDropdown v-if="item.component === 'ElDropdown'" :items="item.arrayValues" :attrs="item.attributes" v-model="formModelObj[key]" />
        <ElCheckBox v-if="item.component === 'ElCheckBox'" :items="item.arrayValues" :attrs="item.attributes" @change="atChanged" />
        <ElInputTextArea v-if="item.component === 'ElInputTextArea'" :attrs="item.attributes" v-model="formModelObj[key]" />
        <ElButton v-if="item.component === 'ElButton'" :attrs="item.attributes" :@click="item.attributes.type === 'button' ? saveCustomer : null" />
    </div>
    <button type="button" @click="saveCustomer">Save Customer</button>
   formModelObj {{  formModelObj}}
  </form>
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
    }
  },
  props: ['custFieldInfo']
}
</script>
