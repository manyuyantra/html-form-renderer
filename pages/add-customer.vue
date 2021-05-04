<template>
    <div>
        <FormRenderer :custFieldInfo="custFieldInfo" @click="atClicked"/>
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
  methods: {
    atClicked (value) {
      this.customer = value
    }
  },
  created () {
    function Customer () {
      this.id = ''
      this.name = '     '
      this.email = ''
      this.dob = ''
      this.gender = ''
      this.work = ''
      this.mobNo = ''
      this.panNo = ''
      this.address1 = ''
      this.address2 = ''
      this.address3 = ''
      this.pincode = ''
    }
    const custFieldInfo = {}

    custFieldInfo.name = {
      component: 'InputText',
      type: 'String',
      attributes: {
        id: 'customer-name',
        name: 'name',
        placeholder: 'Enter Your Name'
      }
    }
    custFieldInfo.email = {
      component: 'InputText',
      type: 'String',
      attributes: {
        id: 'customer-email',
        name: 'email',
        placeholder: 'Enter Your Email'
      }
    }
    custFieldInfo.dob = {
      component: 'InputText',
      type: 'String',
      attributes: {
        id: 'customer-email',
        name: 'dob',
        placeholder: 'Enter Your Date of Birth'
      }
    }
    custFieldInfo.gender = {
      component: 'ElRadioBtn',
      type: 'Array',
      arrayValues: ['Male', 'Female', 'DSD'],
      attributes: {
        name: 'gender'
      }
    }
    custFieldInfo.work = {
      component: 'Dropdown',
      type: 'Arrays',
      arrayValues: ['SelfEmployed', 'GovtJob', 'PrivateJob'],
      attributes: {
        name: 'work'
      }
    }
    custFieldInfo.panNo = {
      component: 'InputText',
      type: 'String',
      attributes: {
        id: 'customer-panno',
        name: 'panNo',
        placeholder: 'Enter Your PAN Number'
      }
    }
    custFieldInfo.mobNo = {
      component: 'InputText',
      type: 'String',
      attributes: {
        id: 'customer-mobNo',
        name: 'mobNo',
        placeholder: 'Enter Your Mobile Number'
      }
    }
    custFieldInfo.address1 = {
      component: 'InputText',
      type: 'String',
      attributes: {
        id: 'customer-address1',
        name: 'address1',
        placeholder: 'Enter Address1'
      }
    }
    custFieldInfo.address2 = {
      component: 'InputText',
      type: 'String',
      attributes: {
        id: 'customer-address2',
        name: 'address1',
        placeholder: 'Enter Address2'
      }
    }
    custFieldInfo.address3 = {
      component: 'InputText',
      type: 'String',
      attributes: {
        id: 'customer-address3',
        name: 'address1',
        placeholder: 'Enter Address1'
      }
    }
    custFieldInfo.pincode = {
      component: 'InputText',
      type: 'String',
      attributes: {
        id: 'customer-pincode',
        name: 'address1',
        placeholder: 'Enter Pincode'
      }
    }
    this.customer = new Customer()
    this.custFieldInfo = custFieldInfo
  }
}
</script>
