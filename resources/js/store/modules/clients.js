import axios from "axios";

const state = {
    clients: [],
    client: ""
};

const mutations = {
    setClients(state, payload) {
        state.clients = payload;
    },
    setClient(state, payload) {
        state.client = payload;
    },
    add(state, payload) {
        state.clients = payload;
    }
};

const getters = {
    allClients(state) {
        return state.clients;
    },
    getClient(state) {
        return state.client;
    },
    getOne(state) {
        return clientId => {
            console.log(clientId);

            return state.clients.find(client => {
                console.log(client);

                return client.id === clientId;
            });
        };
    }
};

const actions = {
    clients({ commit }) {
        if (!localStorage.getItem("access_token") || undefined) {
            return false;
        }
        const token = localStorage.getItem("access_token");

        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        axios
            .get("api/clients")
            .then(res => {
                console.log(res.data);
                commit("setClients", res.data);
            })
            .catch(err => {
                console.log(err);
            });
    },
    show({ commit }, id) {
        console.log(id);

        // if (!localStorage.getItem("access_token") || undefined) {
        //     return false;
        // }
        // const token = localStorage.getItem("access_token");

        // axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        // console.log(id);
        return new Promise((resolve, reject) => {
            axios
                .get("api/clients/" + id)
                .then(res => {
                    console.log(res.data);
                    commit("setClient", res.data);
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    add({ commit }, payload) {
        console.log(payload);

        if (!localStorage.getItem("access_token") || undefined) {
            return false;
        }
        const token = localStorage.getItem("access_token");

        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        return new Promise((resolve, reject) => {
            axios
                .post("api/clients", payload)

                .then(res => {
                    commit("add", res.data);
                    resolve(res);
                })
                .catch(err => {
                    console.log(err.message);
                    reject(err);
                });
        });
    },
    UPDATE_CLIENT({ commit }, client) {
        // if (!localStorage.getItem("access_token") || undefined) {
        //     return false;
        // }
        // const token = localStorage.getItem("access_token");

        // axios.defaults.headers.common["Authorization"] = "Bearer " + token;

        return new Promise((resolve, reject) => {
            axios
                .patch("api/clients/" + client.id, client)
                .then(res => {
                    resolve(res);
                    console.log(res.data.data);
                })
                .catch(err => {
                    reject(err);
                    console.log(err.message);
                    //commit("errors", err.message, { root: true });
                });
        });
    },
    DELETE_CLIENT({ commit }, id) {
        // if (!localStorage.getItem("access_token") || undefined) {
        //     return false;
        // }
        // const token = localStorage.getItem("access_token");

        // axios.defaults.headers.common["Authorization"] = "Bearer " + token;

        return new Promise((resolve, reject) => {
            axios
                .delete("api/clients/" + id)
                .then(() => {
                    resolve();
                })
                .catch(err => {
                    reject();
                    //commit("errors", err.message, { root: true });
                });
        });
    },
    UPLOAD_AVATAR({ commit }, image) {
        const token = localStorage.getItem("access_token");

        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        return new Promise((resolve, reject) => {
            axios
                .post("/uploads", {
                    image: image
                })
                .then(res => {
                    resolve(res);
                    console.log(res);
                })
                .catch(err => {
                    reject(err);
                    console.log(err);
                });
        });
    }
};

export default {
    state,
    mutations,
    getters,
    actions
};
