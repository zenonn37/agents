<template>
  <v-card mb-1>
    <v-layout row wrap class="pa-3 tip">
      <v-flex>
        <v-list-tile avatar @click="onClient">
          <v-list-tile-avatar>
            <v-icon x-large>account_circle</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>
              <router-link :to="`/clients/${data.id}`">
                <strong class="grey--text">{{data.first}} {{data.last}}</strong>
              </router-link>
            </v-list-tile-title>
            <v-list-tile-sub-title>
              <small>{{data.email}} | {{data.phone}}</small>
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      status: true
    };
  },
  computed: {
    name() {
      //return this.data.first + ' ' + data.last
    }
  },
  methods: {
    onClient() {
      console.log("client");
    }
  }
};
</script>

<style scoped>
.tip {
  border-left: 4px solid cadetblue;
}
.center {
  text-align: center;
}
a {
  text-decoration: none;
}
</style>
