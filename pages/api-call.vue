<template>
  <div>
    <button @click="fetchSomething">Authenticate</button>
     <button @click="getUsers">Getuser</button>
        <button @click="logout">Logout</button>
        <button @click="isAuthenticated">isAuthenticated</button>
        {{ token }} {{ msg }}
        {{ users }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: [],
      token: '',
      msg: null
    }
  },
  methods: {
    async fetchSomething () {
      const userName = 'siva'
      const pass = 'Test@123'
      const encStr = 'Basic ' + btoa(userName + ':' + pass)
      console.log(encStr)
      const config = {
        method: 'get',
        url: 'http://localhost:9090/demo/api/authenticate',
        headers: { Authorization: encStr }
      }
      const res = await this.$axios(config)
      this.token = res.headers['x-auth-token']
      this.msg = res.data
      console.log(res)
    },
    async getUsers () {
      const config = {
        method: 'get',
        url: 'http://localhost:9090/demo/users',
        headers: { 'x-auth-token': this.token }
      }
      const res = await this.$axios(config)
      this.users = res.data
    },
    async logout () {
      const config = {
        method: 'get',
        url: 'http://localhost:9090/demo/api/logout',
        headers: { 'x-auth-token': this.token }
      }
      const res = await this.$axios(config)
      this.msg = res.data
      this.users = []
    },
    async isAuthenticated () {
      const config = {
        method: 'get',
        url: 'http://localhost:9090/demo/api/isAuthenticated',
        headers: { 'x-auth-token': this.token }
      }
      const res = await this.$axios(config)
      this.msg = res.data
      this.users = []
    }
  }
}
</script>
