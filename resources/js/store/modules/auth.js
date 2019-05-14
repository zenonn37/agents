import axios from "axios";
import { resolve } from "q";

const state = {
    user: "",
    token: ""
};

const mutations = {
    SET_AUTH(state, token) {
        state.auth = token;
    },
    USER(state, user) {
        state.user = user;
    },
    CLEAR_AUTH(state) {
        state.user = null;
        state.token = null;
    }
};

const getters = {
    GET_AUTH(state) {
        return state.auth;
    },
    GET_USER(state) {
        return state.user;
    }
};

const actions = {
    AUTH({ commit }) {
        if (!localStorage.getItem("access_token") || undefined) {
            return false;
        }

        const token = localStorage.getItem("access_token");

        axios.defaults.headers.common["Authorization"] = "Bearer " + token;

        return new Promise((resolve, reject) => {
            axios
                .get("api/user")
                .then(res => {
                    resolve(res);
                    commit("SET_AUTH", res.data.access_token);
                    commit("USER", res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    LOGOUT({ commit }) {
        if (!localStorage.getItem("access_token") || undefined) {
            return false;
        }

        return new Promise((resolve, reject) => {
            axios
                .post("api/logout")
                .then(() => {
                    resolve();
                    localStorage.removeItem("access_token");
                    commit("CLEAR_AUTH");
                })
                .catch(err => {
                    console.log(err);
                    reject();
                });
        });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
