<template>
  <div id="123">
    <div v-for="(item,index) in objKeys" :key="index">
      <ElInputText v-if="isInputText(item)" v-model="customer[item]" :item="item" :obj="customer"/>
      <ElRadioBtn v-if="isInputRadio(item)" :items="customer[item]" :name="item" v-model="customer.gender" />
    </div>
    <input type="text" v-model="customer.name">{{ newCustomer }}
  </div>
</template>
<script>

export default {
  data () {
    return {
      newCustomer: {},
      radioBtnKeys: ['gender']
    }
  },
  beforeCreate () {
    function Customer () {
      this.id = ''
      this.name = ''
      this.email = ''
      this.mobNo = ''
      this.panId = ''
      this.address = ''
      this.gender = 'Male'
      this.genderOptions = ['Male', 'Female', 'dfd']
    }
    this.customer = new Customer()
    this.objKeys = Object.keys(this.customer)
    this.newCustomer = new Customer()
  },
  created () {
    this.newCustomer = this.customer
  },
  methods: {
    isInputText: (item) => {
      const inputTextKeys = ['name', 'email', 'mobNo', 'panId', 'address']
      return inputTextKeys.includes(item)
    },
    isInputRadio: (item) => {
      const inputRadioKeys = ['genderOptions']
      return inputRadioKeys.includes(item)
    }
  }
}
</script>
