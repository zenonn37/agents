<template>
  <div>
    <v-layout column>
      <v-flex>
        <form @submit.prevent="login">
          <v-text-field type="email" label="Username" v-model.trim="logins.username">Email</v-text-field>
          <v-text-field type="password" label="Password" v-model.trim="logins.password">Password</v-text-field>

          <v-btn type="submit" color="primary" large>Login</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logins: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("LOGIN", this.logins)
        .then(() => {
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
        });
      // axios
      //   .post("api/login", {
      //     username: this.username,
      //     password: this.password
      //   })
      //   .then(res => {
      //     console.log("logged");

      //     console.log(res.data.access_token);
      //     localStorage.setItem("access_token", res.data.access_token);
      //     this.$router.push("/");
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  }
};
</script>

<style>
</style>
