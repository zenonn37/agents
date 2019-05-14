<template>
  <div>
    <v-layout row warp>
      <v-flex>
        <h1>Account</h1>
        <p>{{acct.name}}</p>
        <p>{{acct.email}}</p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("ACCOUNT").then(() => {
      console.log("loaded");
    });
  },
  computed: {
    acct() {
      return this.$store.getters.GET_ACCOUNT;
    }
  }
};
</script>

<style>
</style>
