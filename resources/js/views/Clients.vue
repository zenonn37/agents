<template>
  <div>
    <v-layout row warp>
      <v-flex mb-5>
        <h1 class="grey--text">Clients</h1>
        <div>
          <v-btn small dark @click="onNewClient" color="blue">
            <v-icon left>supervised_user_circle</v-icon>New Client
          </v-btn>
        </div>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <clients-list :data="client" v-for="client in clients" :key="client.id"></clients-list>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import ClientsList from "../components/ClientsList";
export default {
  components: {
    ClientsList
  },

  data() {
    return {
      clients: []
    };
  },
  methods: {
    onNewClient() {
      console.log("clicked");
      this.$router.push({ name: "new_client" });
    }
  },
  computed: {
    name() {
      return this.clients.first + " " + this.clients.last;
    }
  },
  created() {
    axios
      .get("api/clients")
      .then(res => {
        this.clients = res.data;
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
</style>
