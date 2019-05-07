<template>
  <v-app>
    <Navbar/>
    <Side/>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
import Navbar from "./components/Navbar";
import Side from "./components/Side";

export default {
  components: {
    Navbar,
    Side
  }
};
</script>