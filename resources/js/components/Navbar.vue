<template>
  <div>
    <v-toolbar dense flat>
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-spacer></v-spacer>
      <v-btn icon @click="login">
        <v-icon>lock_open</v-icon>
      </v-btn>

      <v-btn icon @click="account">
        <v-icon>account_circle</v-icon>
      </v-btn>

      <v-btn icon @click="logout">
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push("/login");
    },
    account() {
      this.$router.push("/account");
    },

    logout() {
      this.$store
        .dispatch("LOGOUT")
        .then(() => {
          this.$router.push("/login");
        })
        .catch(err => {
          console.log(err);
          this.$router.push("/login");
        });
    }
  }
};
</script>

<style>
</style>
