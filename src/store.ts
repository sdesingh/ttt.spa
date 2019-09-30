import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
  },
  mutations: {
    userLoggedIn(state, isLoggedIn) {
      state.loggedIn = isLoggedIn;
    }
  },
  actions: {
    logIn({ commit }) {

      axios.post("http://localhost:3000/login", {username: "sdesingh", password: "igor2020"}, { withCredentials: true })
        .then(
          (response) => {
            console.log(response.data);
            commit('userLoggedIn', true)
          }
        )
        .catch(
          (error) => {
            console.log(`Unable to log in. Error: ${error}`);
          }
        )
    },
    logOut({ commit }) {

      axios.post("http://localhost:3000/logout", {}, { withCredentials: true })
      .then(
        (response) => {
          console.log(response.data);
          commit('userLoggedIn', false)
        }
      )
      .catch(
        (error) => {
          console.log(`Unable to logout. Error: ${error}`);
        }
      )
    },
    verify({ commit }) {
      
    }

  },
});
