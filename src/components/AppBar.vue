<template>
  <div>
    <v-app-bar
      color="blue darken-1"
      dark
    >

      <v-toolbar-title>Tic Tac Toe</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn v-if="!loggedIn" class="ma-2" color="error" @click="logIn">Login</v-btn>
      <v-btn v-if="!loggedIn" class="ma-2" color="error" @click="logIn">Register</v-btn>
      <div v-if="loggedIn">Welcome sdesingh!</div>
      <v-btn v-if="loggedIn" class="ma-2" color="error" @click="logOut">Logout</v-btn>

    </v-app-bar>

    <login-modal :dialog="show" @show="show = !show"/>
  </div>


</template>

<script lang="ts">
import Vue from 'vue'
import LoginModal from './UserLoginModal.vue';

export default Vue.extend({
  components: {
    LoginModal
  },
  data() {
    return {
      collapseOnScroll: true,
      show: false,
    }
  },
  computed: {
    loggedIn(){
      return this.$store.state.loggedIn
    }
  },
  methods: {
    logIn(){
      // this.$store.dispatch('logIn');
      this.show = true;
    },
    logOut(){
      this.$store.dispatch('logOut')
    }
  }
})
</script>