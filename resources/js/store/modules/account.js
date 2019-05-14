import axios from "axios";

const state = {
    account: ""
};

const getters = {
    GET_ACCOUNT(state) {
        return state.account;
    }
};

const mutations = {
    SET_ACCOUNT(state, payload) {
        state.account = payload;
    }
};

const actions = {
    ACCOUNT({ commit }) {
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
                    console.log(res.data);
                    commit("SET_ACCOUNT", res, data);
                })
                .catch(err => {
                    reject(err);
                    console.log(err);
                });
        });
    }
};
