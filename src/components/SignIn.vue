<template>
  <v-row justify="center" align="center" v-show="!SignIn">
    <v-col cols="6">
      <v-row justify-md="center">
        <v-form
          v-model="valid"
          class="pb-4 pt-4 pl-2 pr-2"
          @submit.prevent
          aria-autocomplete="off"
          ref="form"
        >
          <h3 class="h3 text-center">LogIn with Email</h3>
          <v-text-field
            label="Email"
            v-model="email"
            prepend-icon="mdi-account-circle"
            color="orange"
            :rules="rules.email"
            required
          >
          </v-text-field>
          <v-text-field
            color="orange"
            label="Password"
            v-model="password"
            prepend-icon="mdi-lock"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            hint="At least 8 characters"
            :rules="rules.password"
            @click:append="show = !show"
            required
          >
          </v-text-field>
          <v-checkbox label="Remember me" color="orange" v-model="remember">
          </v-checkbox>
          <v-row class="d-flex pa-2" justify="center">
            <v-btn
              type="submit"
              color="orange"
              :disabled="!valid"
              @click="Enviar()"
            >
              Enviar
            </v-btn>
          </v-row>
        </v-form>
      </v-row>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col cols="6">
      <v-row justify-md="center" class="mb-2">
        <h3 class="h3 text-center">Don't have an account? Sign up!</h3>
      </v-row>
      <v-row justify-md="center">
        <v-btn color="primary">
          <v-icon left> mdi-facebook </v-icon>
          Sign in with Facebook
        </v-btn>
        <v-btn color="error" class="ma-2">
          <v-icon left> mdi-google-plus </v-icon>
          Sign In with Google</v-btn
        >
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Session from "../SignIn";
/**
 * @module SignIn
 * @desc Componente de Login registro o redes sociales
 * @vue-data {Boolen} SigIn - State visual
 * @vue-data {Boolean} valid - State form
 * @vue-data {Boolean} show - Show/Hide Password
 * @vue-data {Boolean} invalid - State invalid form
 * @vue-data {String} email - Email User
 * @vue-data {String} password - Password User
 * @vue-data {Object} rules -  Rules for form
 * @vue-data {Boolean} remember - Checkbox save data form
 * @vue-event {Callback|Function} Enviar - Submit form
 * @vue-event {callBack} FailedLogin - Failed login state
 * @requires SignIn.js
 *
 *
 */
export default {
  name: "SignIn",
  data() {
    return {
      SignIn: false,
      valid: false,
      show: false,
      invalid: false,
      email: "",
      password: "",
      rules: {
        email: [(v) => /.+@.+/.test(v) || "E-mail must be valid"],
        password: [(v) => v.length >= 8 || "Password at least 8 characters"],
      },
      remember: false,
    };
  },
  methods: {
    /**
     * Function Submit Form to SignIn
     */
    Enviar() {
      Session.Validate(this.email, this.password)
        .then((status) => {
          if (!this.remember) {
            this.email = "";
            this.password = "";
            this.$refs.form.resetValidation();
          }
          this.$emit("State", status);
        })
        .catch((status) => {
          this.$emit("State", status);
          this.FailedLogin();
        });
    },
    /**
     * Function failedLogin state
     */
    FailedLogin() {
      this.$emit("FailedLogin", true);
    },
  },
};
</script>

<style></style>
