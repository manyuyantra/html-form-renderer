<template>
    <div>
        Welcome to Car Service
        <FormRenderer :custFieldInfo="custFieldInfo" @click="atClicked"/>
        {{ carservice }}
    </div>
</template>

<script>
export default {
  data () {
    return {
      carservice: {}
    }
  },
  methods: {
    atClicked (value) {
      this.carservice = value
    }
  },
  created () {
    const custFieldInfo = {}

    custFieldInfo.carno = {
      component: 'InputText',
      type: 'String',
      attributes: {
        id: 'carno',
        name: 'carno',
        placeholder: 'Enter Your carno'
      }
    }

    custFieldInfo.licno = {
      component: 'InputText',
      type: 'String',
      attributes: {
        id: 'licno',
        name: 'licno',
        placeholder: 'Enter Your licno'
      }
    }
    custFieldInfo.name = {
      component: 'InputText',
      type: 'String',
      attributes: {
        id: 'servicedate',
        name: 'servicedate',
        placeholder: 'Enter Your servicedate'
      }
    }
    this.custFieldInfo = custFieldInfo
  }
}
</script>
