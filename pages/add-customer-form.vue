<template>
    <div>
      <h5 class="parent">No of customers added: {{ customers.length }}</h5><br>
        <FormRenderer :formSpec="custFieldInfo" :storeName="storeName" />
    </div>
</template>

<script>
export default {
  data () {
    return {
      customer: {},
      storeName: 'customer'
    }
  },
  computed: {
    customers () {
      return this.$store.state[this.storeName].list
    }
  },
  created () {
    const custFieldInfo = {}

    custFieldInfo.name = {
      component: 'ElInputText',
      type: 'String',
      attributes: {
        id: 'customer-name',
        name: 'Customer',
        placeholder: 'Enter Your Name'
      }
    }
    custFieldInfo.lname = {
      component: 'ElInputText',
      type: 'String',
      attributes: {
        id: 'customer-lname',
        name: 'Last name',
        placeholder: 'Enter Your last Name'
      }
    }
    custFieldInfo.email = {
      component: 'ElInputText',
      type: 'String',
      attributes: {
        id: 'customer-email',
        name: 'email',
        placeholder: 'Enter Your Email',
        pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'
      }
    }
    custFieldInfo.dob = {
      component: 'ElInputText',
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
      component: 'ElInputText',
      type: 'String',
      attributes: {
        id: 'customer-panno',
        name: 'panNo',
        placeholder: 'Enter Your PAN Number'
      }
    }
    custFieldInfo.mobNo = {
      component: 'ElInputText',
      type: 'String',
      attributes: {
        id: 'customer-mobNo',
        name: 'mobNo',
        placeholder: 'Enter Your Mobile Number'
      }
    }
    custFieldInfo.address1 = {
      component: 'ElInputText',
      type: 'String',
      attributes: {
        id: 'customer-address1',
        name: 'address1',
        placeholder: 'Enter Address1'
      }
    }
    custFieldInfo.address2 = {
      component: 'ElInputText',
      type: 'String',
      attributes: {
        id: 'customer-address2',
        name: 'address1',
        placeholder: 'Enter Address2'
      }
    }
    custFieldInfo.address3 = {
      component: 'ElInputText',
      type: 'String',
      attributes: {
        id: 'customer-address3',
        name: 'address1',
        placeholder: 'Enter Address1'
      }
    }
    custFieldInfo.pincode = {
      component: 'ElInputText',
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
    custFieldInfo.saveButton = {
      component: 'ElButton',
      attributes: {
        id: 'saveForm',
        value: 'save',
        type: 'submit'
      }
    }
    custFieldInfo.cancelButton = {
      component: 'ElButton',
      attributes: {
        id: 'cancelForm',
        value: 'cancel',
        type: 'reset'
      }
    }
    this.custFieldInfo = custFieldInfo
  },
  methods: {
    atClicked (value) {
      this.customer = value
    }
  }
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
