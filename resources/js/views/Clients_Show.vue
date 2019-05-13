<template>
  <div>
    <v-layout row warp>
      <v-flex>
        <h1 class="grey--text">Client Details</h1>
      </v-flex>
    </v-layout>
    <v-layout row warp>
      <v-flex>
        <h1 class="grey--text">{{oneRecord.first}}</h1>
        <p>
          <v-btn fab small color="red" @click="onDelete(oneRecord.id)">
            <v-icon>delete</v-icon>
          </v-btn>
          <v-btn fab small color="orange" @click="onUpdate(oneRecord.id)">
            <v-icon>update</v-icon>
          </v-btn>
        </p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { log } from "util";
export default {
  props: {
    id: {
      type: String
    }
  },
  mounted() {
    this.$store.dispatch("show", this.id).then(res => {
      console.log(res.data);
    });
    // axios.get("api/clients/" + this.id).then(res => {
    //   console.log(res.data);
    // });
  },
  computed: {
    oneRecord() {
      return this.$store.getters.getClient;
    }
  },
  methods: {
    onDelete(id) {
      this.$store.dispatch("DELETE_CLIENT", id).then(() => {
        this.$router.push("/clients");
      });
    },
    onUpdate(id) {
      this.$router.push("/edit_client/" + id);
      // const client = this.oneRecord;
      // console.log(client);

      // this.$store.dispatch("UPDATE_CLIENT", id).then(() => {
      //   console.log("updated");
      // });
    }
  }
};
</script>

<style>
</style>
