<template>
  <div id="123">
    <div v-for="(item,index) in objKeys" :key="index">
      <ElInputText v-if="isInputText(item)" v-model="customer[item]" :item="item" :obj="customer"/>
      <ElRadioBtn v-if="!isInputText(item)" v-model="customer[item]" :items="customer[item]" :name="item" />
    </div>
    <input type="text" v-model="customer.name">{{ customer }}
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
      this.gender = ['male', 'female', 'dfd']
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
    }
  }
}
</script>
