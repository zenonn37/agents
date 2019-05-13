<template>
  <div>
    <v-layout column>
      <v-flex>
        <form @submit.prevent="register">
          <v-text-field type="email" label="Username" v-model.trim="username">Email</v-text-field>
          <v-text-field type="password" label="Password" v-model.trim="password">Password</v-text-field>

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
      username: "",
      password: ""
    };
  },
  methods: {
    register() {
      axios
        .post("api/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          console.log(res.data);
          localStorage.setItem("access_token", res.data.access_token);
          this.$router.push("/dashboard");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>
