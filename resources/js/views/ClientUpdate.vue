<template>
  <div>
    <v-layout>
      <v-flex>
        <client-update :data="edit"></client-update>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import ClientUpdate from "../components/EditClient";
export default {
  components: {
    ClientUpdate
  },
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {};
  },
  computed: {
    edit() {
      return this.$store.getters.getClient;
    }
  },
  mounted() {
    this.$store.dispatch("show", this.id).then(res => {
      console.log(res.data);
    });
  }
};
</script>

<style>
</style>
