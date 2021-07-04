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
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 1500);
    },
    failedLogin(val) {
      val &&
        setTimeout(() => {
          this.failedLogin = false;
        }, 1500);
    },
  },
};
</script>
