<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          User Login
        </v-card-title>

        <v-card-text class="pa-5">
          <v-text-field
            v-model="username"
            label="Username"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            label="Email"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            required
            type="password"
          ></v-text-field>
          
        </v-card-text>



        <v-divider></v-divider>


        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn
            color="primary"
            text
            @click="$emit('show')"
          >
            Cancel
          </v-btn>

          <v-btn
            color="primary"
            text
            @click="logIn"
          >
            Login
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    props: ['dialog'],
    data() {
      return {
        username: "",
        email: "",
        password: "",
      }
    },
    methods: {
      logIn(){
        this.$emit('show')
        this.$store.dispatch('logOut')
      },
      logOut(){
        this.$emit('show')
        this.$store.dispatch('logOut')
      },
      verify(){
        this.$emit('show')
        this.$store.dispatch('verify')
      }
    }
  })
</script>

<style scoped>

</style>