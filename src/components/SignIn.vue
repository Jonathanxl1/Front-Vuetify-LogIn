<template>
 
    <v-row justify="center" align="center" >
      <v-col cols="6">
        <v-row justify-md="center">
          <v-form v-model="valid" class="pb-4 pt-4 pl-2 pr-2">
            <h3 class="h3 text-center">LogIn with Email</h3>
            <v-text-field
              label="Email"
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
            <v-checkbox label="Remember me" color="orange"> </v-checkbox>
            <v-row class="d-flex pa-2" justify="center">
              <v-btn type="submit" color="orange" :disabled="!valid">
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
export default {
  name: "SignIn",
  mounted() {
    console.log(this);
  },
  data() {
    return {
      valid: false,
      show: false,
      invalid: false,
      email: "",
      password: "",
      rules: {
        email: [(v) => /.+@.+/.test(v) || "E-mail must be valid"],
        password: [(v) => v.length >= 8 || "Password at least 8 characters"],
      },
      expand: false,
    };
  },
};
</script>

<style></style>
