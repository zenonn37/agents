<template>
  <div>
    <v-layout wrap row column>
      <v-container>
        <v-flex>
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1">Client Name</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2">Client Contact</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3">Client Address</v-stepper-step>
            </v-stepper-header>
            <form @submit.prevent="onCreate">
              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-card class="mb-5 pa-3" height="200px">
                    <v-text-field
                      box
                      prepend-icon="account_circle"
                      label="First Name"
                      type="text"
                      v-model="client.first"
                    ></v-text-field>
                    <v-text-field
                      box
                      prepend-icon="account_circle"
                      label="Last Name"
                      type="text"
                      v-model="client.last"
                    ></v-text-field>
                  </v-card>

                  <v-btn color="primary" @click="e1 = 2">Continue</v-btn>

                  <v-btn flat @click="onCancel">Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <v-card class="mb-5" height="200px">
                    <v-text-field
                      box
                      prepend-icon="email"
                      label="Email Address"
                      type="text"
                      v-model="client.email"
                    ></v-text-field>
                    <v-text-field
                      box
                      prepend-icon="phone"
                      label="Phone Number"
                      type="text"
                      v-model="client.phone"
                    ></v-text-field>
                  </v-card>

                  <v-btn color="primary" @click="e1 = 3">Continue</v-btn>
                  <v-btn flat @click="e1 = 1">Back</v-btn>
                  <v-btn flat @click="onCancel">Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                  <v-card class="mb-5">
                    <v-text-field
                      box
                      prepend-icon="place"
                      label="Street Address"
                      type="text"
                      v-model="client.street"
                    ></v-text-field>
                    <v-text-field
                      box
                      prepend-icon="place"
                      label="City"
                      type="text"
                      v-model="client.city"
                    ></v-text-field>
                    <v-text-field
                      box
                      prepend-icon="place"
                      label="State"
                      type="text"
                      v-model="client.state"
                    ></v-text-field>
                    <v-text-field
                      box
                      prepend-icon="place"
                      label="Zip"
                      type="text"
                      v-model="client.zip"
                    ></v-text-field>
                  </v-card>

                  <v-btn color="primary" type="submit">Create Client</v-btn>

                  <v-btn flat @click="e1 = 2">Back</v-btn>
                  <v-btn flat @click="onCancel">Cancel</v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </form>
          </v-stepper>

          <!-- <v-card pa-3>
                      <form @submit.prevent="onCreate">

                          <v-text-field label="First Name" type="text" v-model="client.first">

                          </v-text-field>

                       
                      </form> 
          </v-card>-->
        </v-flex>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      e1: 0,
      client: {
        first: null,
        last: null,
        email: null,
        phone: null,
        street: null,
        city: null,
        state: null,
        zip: null
      }
    };
  },

  methods: {
    onCancel() {
      this.$router.push({ name: "client" });
    },
    onCreate() {
      console.log(this.client);
      this.$store.dispatch("clients/add", this.client);
    }
  }
};
</script>

<style>
</style>
