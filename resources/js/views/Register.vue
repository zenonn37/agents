<template>
  <div>
    <v-layout column>
      <v-flex>
        <form @submit.prevent="register">
          <v-text-field type="text" label="Name" v-model.trim="name"></v-text-field>
          <v-text-field type="email" label="Email" v-model.trim="email">Email</v-text-field>
          <v-text-field type="password" label="Password" v-model.trim="password">Password</v-text-field>

          <v-btn type="submit" color="primary" large>Register</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      axios
        .post("api/register", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(res => {
          console.log(res.data);
          this.$router.push("/login");
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
