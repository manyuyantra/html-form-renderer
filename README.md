# Rendering HTML form by passing values to NuxtJs component

Easiest & fastest way to render HTML form elements in a webpage. As it is built by using the Vuex Store it has the ability to store and delete form data.

Component name:  **FormRenderer**

Usage syntax:  `<FormRenderer :formSpec="" :storeName="" />`

 It has two  attributes:

` <FormRenderer :formSpec="" :storeName="" />`

  1. _formSpec_  - It should be mapped to the JS object which contains the information about the HTML form elements which will be rendered at runtime.

  1. _storeName_ - Represents the VuexStore file name located in `/store/` folder.

# Demo: 

- Run the application after cloned & installed all dependencies

- Click `add-customer-form`(page is designed by using `FormRenderer` component) link in the homepage (http://localhost:3000)

- Lets add customer data & hit "Enter" or "Submit" button. Please note that you can add **_N number of datasets_** into VuexStore by using this single form and the same has been accessible immediately via `Formtags`


# How to create a simple form using `FormRenderer` component?

- Create `sample-form.vue` in `/pages/` folder & insert `<FormRenderer>` component as shown below

 ```html
sample-form.vue
---------------

<template>
    <div>
        <FormRenderer :formSpec="formSpec" :storeName="storeName" />
    </div>
</template>
```

- Let's configure the JavaScript object to render the following HTML form elements inside the`<FormRenderer>` component,

    - InputText
    - InputTextArea
    - RadioButton
    - Dropdown
    - Checkbox
    - SubmitButton


```javascript
<script>
export default {
  data () {
    return {
      formSpec: {},
      storeName: 'customer' // vuex store name "/store/customer.js"
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
    this.formSpec = custFieldInfo
  }
}

</script>
```
- Run the application `$ npm run dev`

- Navigate to http://localhost:3000/sample-form & test the change


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
