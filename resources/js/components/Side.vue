<template>
  <div>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: true,
      items: [
        {
          icon: "account_circle",
          title: "Account",
          to: "/account"
        },
        {
          icon: "dashboard",
          title: "Dashboard",
          to: "/"
        },
        {
          icon: "supervised_user_circle",
          title: "Clients",
          to: "/clients"
        },
        {
          icon: "assignment_turned_in",
          title: "Documents",
          to: "/documents"
        },
        {
          icon: "assignment_turned_in",
          title: "About",
          to: "/about"
        },
        {
          icon: "assignment_turned_in",
          title: "Contact",
          to: "/contact"
        }
      ]
    };
  }
};
</script>

<style>
</style>
