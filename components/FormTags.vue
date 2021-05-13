<template>
    <div>
        <b-form-tag v-for="(customer,index) in customers" :key="index" @remove="remove(customer)" input-id="tags-basic">
          {{ customer.name }}
        </b-form-tag>
    </div>
</template>

<script>
export default {
  computed: {
    customers () {
      return this.$store.state[this.storeName].list // dynamic store
    }
  },
  methods: {
    remove (customer) {
      this.$store.commit(this.storeName + '/remove', customer)
    }
  },
  props: ['storeName']
}
</script>
