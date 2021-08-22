<template>
  <section class="section">
    <div class="container">
      <h2 class="title">My Profile</h2>
      <div class="content">
        <p>
          <strong>Username:</strong>
          {{ loggedInUser }}
        </p>
        <p>
          <strong>Email:</strong>
          {{ loggedInUser }}
        </p>
        <button @click="checkme">Refresh</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['loggedInUser', 'isUserAuthenticated'])
  },
  methods: {
    checkme () {
      this.$store.commit('setUserAuthenticated', true)
    }
  }

}
</script>
