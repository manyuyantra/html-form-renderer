<template>
  <div id="123">
    <div v-for="(item,key,index) in custFieldInfo" :key="index">
        {{ customer[item.keyName] +''+key}}
        <div v-if="item.type === 'String'">
          <label :for="item.id">{{ placeholder = item.placeholder }} </label>
          <component :is="item.component" :id='item.id' v-model="customer[item.keyName]" :name="key" :value="item.value"/>
        </div>
        <!-- <div v-if="item.type === 'Array'">
           <div v-for="(val,key1,index1) in customer[item.arrayValues]" :key="index1">
               {{ val }}
          <component
          :is="item.component"
          :id="item.id"
          v-model="customer[key]"
          :checked="key1  === 0 ? true : false"
          name="val" />
          </div>
        </div> -->
    </div>
    {{ customer }}
  </div>
</template>
<script>

export default {
  data () {
    return {
      customer: {}
    }
  },
  created () {
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
    const custFieldInfo = {}

    custFieldInfo.name = {
      id: 'customer-name',
      component: 'InputText',
      type: 'String',
      placeholder: 'Enter Your Name',
      keyName: 'name',
      value: 'sds'
    }
    custFieldInfo.email = {
      id: 'customer-email',
      component: 'InputText',
      type: 'String',
      placeholder: 'Enter Your Email',
      keyName: 'email',
      value: 'sdsd'
    }
    custFieldInfo.gender1 = {
      id: 'customer-gender',
      component: 'RadioBtn',
      type: 'String',
      value: 'Male',
      keyName: 'gender'
    }
    custFieldInfo.gender2 = {
      id: 'customer-gender',
      component: 'RadioBtn',
      type: 'String',
      value: 'Female',
      keyName: 'gender'
    }

    this.customer = new Customer()
    this.objKeys = Object.keys(custFieldInfo)
    this.custFieldInfo = custFieldInfo
  }
}
</script>
