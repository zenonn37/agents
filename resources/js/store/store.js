import Vue from "vue";
import Vuex from "vuex";
import clients from "./modules/clients";
import accounts from "./modules/account";
import auth from "./modules/auth";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        clients,
        accounts,
        auth
    }
});
