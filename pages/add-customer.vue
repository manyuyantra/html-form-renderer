<template>
    <div>
        <FormRenderer :custFieldInfo="custFieldInfo" />
        {{ this.customers }}
            <CentralStore />
    </div>
</template>

<script>
export default {
  computed: {
    customers () {
      return this.$store.state.customer.list
    }
  },
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
      this.name = ''
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
      this.profession = []
      this.jobDescription = ''
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
      component: 'ElDropdown',
      type: 'Array',
      arrayValues: ['SelfEmployed', 'GovtJob', 'PrivateJob'],
      attributes: {
        name: 'work',
        labelValue: 'Profession'
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
    custFieldInfo.profession = {
      component: 'ElCheckBox',
      type: 'Array',
      arrayValues: ['SelfEmployed', 'GovtJob', 'PrivateJob'],
      attributes: {
        id: 'customer-profession',
        name: 'profession'
      }
    }
    custFieldInfo.jobDescription = {
      component: 'ElInputTextArea',
      type: 'text',
      attributes: {
        id: 'customer_job',
        name: 'jobdescription',
        labelValue: 'Enter Job Description',
        placeholder: 'Enter Your Job Details'
      }
    }
    this.objInfo = new Customer()
    this.custFieldInfo = custFieldInfo
  }
}
</script>
