<template>
    <div>
        <b-form-tag
        v-for="(customer,index) in customers"
        :key="index"
        @remove="remove(customer)"
        input-id="tags-basic">
          <span @click="show(customer)">{{ customer.name }}</span>
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
    },
    show (customer) {
      this.$emit('click', { ...customer })
    }
  },
  props: ['storeName']
}
</script>
