
<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Welcome back!</h2>

          <Notification :message="error" v-if="error"/>

          <form method="post" @submit.prevent="login">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  type="email"
                  class="input"
                  name="email"
                  v-model="email"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="password"
                />
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Log In</button>
            </div>
          </form>
          <div class="has-text-centered" style="margin-top: 20px">
            <p>
              Don't have an account? <nuxt-link to="/register">Register</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

  data () {
    return {
      email: '',
      password: '',
      error: null,
      encodedCredentials: ''
    }
  },

  methods: {
    async login () {
      this.generateBase64Credentials()
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          },
          headers: { Authorization: this.encodedCredentials }
        }).then((res) => {
          console.log(res)
          // const user = { username: 'testuser' }
          // this.$auth.setUser(user)
          // this.$auth.$storage.setUniversal('user', user, true)
          // console.log(this.$auth.$storage.getUniversal('user'))
          this.$store.commit('setUserAuthenticated', true)
          this.$router.push('/profile')
        })
      } catch (e) {
        console.log(e.response)
        this.error = e.response.status
      }
    },
    generateBase64Credentials () {
      const encStr = 'Basic ' + btoa(this.email + ':' + this.password)
      console.log(encStr)
      this.encodedCredentials = encStr
    }
  }
}
</script>
