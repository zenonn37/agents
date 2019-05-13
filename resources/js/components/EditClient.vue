<template>
  <div>
    <v-card pa-5>
      <form @submit.prevent="onUpdate">
        <v-text-field
          box
          prepend-inner-icon="account_circle"
          label="First Name"
          type="text"
          v-model="data.first"
        ></v-text-field>
        <v-text-field
          box
          prepend-inner-icon="account_circle"
          label="Last Name"
          type="text"
          v-model="data.last"
        ></v-text-field>
        <v-text-field
          box
          prepend-inner-icon="email"
          label="Email Address"
          type="text"
          v-model="data.email"
        ></v-text-field>
        <v-text-field
          box
          prepend-inner-icon="phone"
          label="Phone Number"
          type="text"
          v-model="data.phone"
        ></v-text-field>
        <v-text-field
          box
          prepend-inner-icon="place"
          label="Street Address"
          type="text"
          v-model="data.street"
        ></v-text-field>
        <v-text-field box prepend-inner-icon="place" label="City" type="text" v-model="data.city"></v-text-field>
        <v-text-field box prepend-inner-icon="place" label="State" type="text" v-model="data.state"></v-text-field>
        <v-text-field box prepend-inner-icon="place" label="Zip" type="text" v-model="data.zip"></v-text-field>

        <v-btn type="submit" @click="onUpdate" color="primary" large>Update {{data.first}}</v-btn>
      </form>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      first: "",
      last: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      zip: ""
    };
  },
  methods: {
    onUpdate() {
      this.$store.dispatch("UPDATE_CLIENT", this.data).then(() => {
        this.$router.push("/clients/" + this.data.id);
      });
    }
  }
};
</script>

<style>
</style>
