import Vue from "vue";
import Vuex from "vuex";
import clients from "./modules/clients";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        clients
    }
});
