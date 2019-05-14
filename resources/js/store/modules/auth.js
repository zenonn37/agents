import axios from "axios";

const state = {
    user: "",
    token: ""
};

const mutations = {
    SET_AUTH(state, payload) {
        state.token = payload;
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
        return state.token;
    },
    GET_USER(state) {
        return state.user;
    }
};

const actions = {
    LOGIN({ commit }, credentials) {
        console.log(credentials);

        return new Promise((resolve, reject) => {
            axios
                .post("api/login", {
                    username: credentials.username,
                    password: credentials.password
                })
                .then(res => {
                    console.log(res);

                    const token = res.data.access_token;

                    commit("SET_AUTH", token);
                    localStorage.setItem("access_token", token);
                    resolve(res);
                    // commit("USER", res.data);
                })
                .catch(err => {
                    console.log(err.error);

                    reject(err);
                });
        });
    },

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
        // if (!localStorage.getItem("access_token") || undefined) {
        //     return false;
        // }

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
                    localStorage.removeItem("access_token");
                    commit("CLEAR_AUTH");
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
