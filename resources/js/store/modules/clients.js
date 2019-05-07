import axios from "axios";

const state = {
    clients: [],
    client: ""
};

const mutations = {
    setClients(state, payload) {
        state.clients = payload;
    },
    add(state, payload) {
        state.clients = payload;
    },
    show(state, payload) {
        state.client = payload;
    },
    update(state, payload) {
        const clients = state.clients.find(client => {
            return client.id === payload.id;
        });
    },
    delete(state, payload) {
        state.clients.splice(state.clients.indexOf(payload), 1);
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
            .get("/clients")
            .then(res => {
                console.log(res.data.data);
                commit("setClients", res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    },
    show({ commit }, id) {
        if (!localStorage.getItem("access_token") || undefined) {
            return false;
        }
        const token = localStorage.getItem("access_token");

        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        console.log(id);

        axios
            .get("/clients/" + id)

            .then(res => {
                console.log(res.data.data);
                commit("show", res.data.data);
                //vueContext.commit('complete', false, { root: true })
            })
            .catch(err => {
                console.log(err.message);
            });
    },
    add({ commit }, payload) {
        console.log(payload);
        commit("COMPLETE", false, { root: true });
        commit("LOADING", true, { root: true });

        if (!localStorage.getItem("access_token") || undefined) {
            return false;
        }
        const token = localStorage.getItem("access_token");

        axios.defaults.headers.common["Authorization"] = "Bearer " + token;

        axios
            .post("/clients", {
                ...payload,
                documents: 0,
                status: false
            })
            .then(res => {
                const id = res.data.data.id;
                console.log(res.data.data);
                commit("add", res.data.data);
                commit("COMPLETE", true, { root: true });
                commit("LOADING", false, { root: true });
                this.$router.push("/clients/" + id);
                //vueContext.commit('complete', false, { root: true })
            })
            .catch(err => {
                console.log(err.message);
                commit("ERRORS", err.message, { root: true });
            });
    },
    UPDATE_CLIENT({ commit }, client) {
        if (!localStorage.getItem("access_token") || undefined) {
            return false;
        }
        const token = localStorage.getItem("access_token");

        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        axios
            .patch("/clients/" + client.id, client)
            .then(res => {
                console.log(res.data.data);
                this.$router.push("/clients/" + client.id);
            })
            .catch(err => {
                //console.log(err.message)
                commit("errors", err.message, { root: true });
            });
    },
    DELETE_CLIENT({ commit }, id) {
        if (!localStorage.getItem("access_token") || undefined) {
            return false;
        }
        const token = localStorage.getItem("access_token");

        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        axios
            .delete("/clients/" + id)
            .then(() => {
                this.$router.push("/clients");
            })
            .catch(err => {
                commit("errors", err.message, { root: true });
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
