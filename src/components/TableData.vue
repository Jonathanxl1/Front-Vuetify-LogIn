<template>
  <v-row justify="center" v-show="SignIn">
    <v-data-table
      :headers="headers"
      :items="users"
      sort-by="name.first"
      item-key="id.value"
    >
    </v-data-table>
  </v-row>
</template>

<script>
import api from "../api.js";
/**
 * @module TableData
 * @desc Componente de Tabla de usuarios
 * @vue-data {Object} headers - Headers for table
 * @vue-data {Object} users - Users receiveid from api
 * @vue-data {Boolean} SignIn - Show/Hide Components
 * @vue-prop {Boolean} [sign=null] Sign - Sign In
 * @vue-event {Object} Sign - Watcher state SignIn
 * @vue-event {Function} LoadUsers - Promise receveid Users api
 * @requires api.js
 */
export default {
  name: "TableData",
  props: { Sign: Boolean },
  data() {
    return {
      headers: [
        { text: "Name", value: "name.first" },
        { text: "Last", value: "name.last" },
        { text: "Email", value: "email" },
        { text: "Phone", value: "phone", sortable: false },
        { text: "Gender", value: "gender", sortable: false },
      ],
      users: [],
      SignIn: false,
    };
  },
  watch: {
    /**
     * Sign
     * @param {Boolean} value - State Sign
     */
    Sign(value) {
      this.SignIn = value;
      if (value) {
        this.LoadUsers();
      }
    },
  },
  methods: {
    /**
     * Function Load users from Promise
     * @param {Boolean} value - State Sign
     */
    LoadUsers() {
      api
        .getUsers()
        .then((data) => {
          let users = data.results;
          this.users = users;
        })
        .catch((e) => console.error(e));
    },
  },
};
</script>

<style></style>
