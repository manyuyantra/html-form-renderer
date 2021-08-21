<template>
    <div>
        <FormRenderer :formSpec="custFieldInfo" :storeName="storeName" />
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
      customer: {},
      storeName: 'customer'
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
    }
    const custFieldInfo = {}

    custFieldInfo.name = {
      component: 'ElInputText',
      type: 'String',
      attributes: {
        id: 'customer-name',
        name: 'Client Name',
        placeholder: 'Enter Your Name'
      }
    }
    custFieldInfo.email = {
      component: 'ElInputText',
      type: 'String',
      attributes: {
        id: 'customer-email',
        name: 'Client email',
        placeholder: 'Enter Your Email',
        pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$'
      }
    }
    custFieldInfo.dob = {
      component: 'ElInputText',
      type: 'String',
      attributes: {
        id: 'customer-email',
        name: 'Date of Birth',
        placeholder: 'Enter Your Date of Birth'
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
    this.objInfo = new Customer()
    this.custFieldInfo = custFieldInfo
  }
}
</script>
