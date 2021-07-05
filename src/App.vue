<template>
  <v-app>
    <v-app-bar app color="dark" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Mobiera Logo"
          class="shrink mr-2"
          contain
          src="../src/assets/logo.png"
          transition="scale-transition"
          width="150"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn v-if="SignIn" @click="SignIn = !SignIn">Cerrar Sesion</v-btn>
    </v-app-bar>

    <v-main>
      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
      <v-alert type="error" transition="fab-transition" v-show="failedLogin"
        >failed to sign in please check your credentials and try again</v-alert
      >

      <v-container class="fill-height">
        <v-row justify="center" align="center" class="pa-2">
          <sign-in
            class="elevation-8"
            v-show="!SignIn"
            v-on:State="status"
            @on:FailedLogin="failedSession"
          />
        </v-row>
        <v-row>
          <table-data :Sign="SignIn" />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SignIn from "./components/SignIn";
import TableData from "./components/TableData.vue";
/**
 * @module App
 * Interfaz con login y tabla de datos
 * @author Jonathan Aguasaco <jonathanxl1@hotmail.com>
 * @version 1.5
 * @requires SigIn.vue
 * @requires TableData.vue
 * @vue-data {Boolean} SignIn - Login status
 * @vue-data {Boolean} overlay - Overlay status
 * @vue-data {Boolean} failedLogin - Failed Login status
 * @vue-event {(Boolean|callback)} status - Session State Role
 * @vue-event {Boolean} failedSession - Session State FailedLogin
 * @vue-event {Boolean} overlay - Change State overlay loading
 * @vue-event {Boolean} failedLogin - Change State FailedLogin Alert
 */
export default {
  name: "App",

  components: {
    SignIn,
    TableData,
  },

  data: () => ({
    SignIn: false,
    overlay: false,
    failedLogin: false,
  }),
  methods: {
    status(value) {
      if (value) {
        this.overlay = true;
        this.SignIn = value;
      } else {
        this.failedSession(!value);
      }
    },
    failedSession(value) {
      this.failedLogin = value;
    },
  },
  watch: {
    /**
     * Watcher overlay
     * @param {Boolean} val - state of overlay
     */
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 1500);
    },
    /**
     * Watcher failedLogin
     * @param {Boolean} val - state of failedLogin
     */
    failedLogin(val) {
      val &&
        setTimeout(() => {
          this.failedLogin = false;
        }, 1500);
    },
  },
};
</script>
