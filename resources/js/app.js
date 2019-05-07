import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import axios from "axios";

import routes from "./routes";

window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.component("app", require("./App.vue").default);

const app = new Vue({
    el: "#app",
    router: new VueRouter(routes)
});
