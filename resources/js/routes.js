import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Account from "./views/Account";
import Clients from "./views/Clients";
import Clients_Show from "./views/Clients_Show";
import New_Client from "./views/New_Client";
import ClientUpdate from "./views/ClientUpdate";
import Register from "./views/Register";
import Login from "./views/Login";

import Documents from "./views/Documents";
import About from "./views/About";
import Contact from "./views/Contact";

export default {
    routes: [
        { path: "*", component: NotFound },
        { path: "/", component: Home, name: "home" },
        { path: "/account", component: Account, name: "account" },
        { path: "/clients", component: Clients, name: "client" },
        { path: "/register", component: Register, name: "register" },
        { path: "/login", component: Login, name: "login" },
        {
            path: "/clients/:id",
            component: Clients_Show,
            name: "client_show",
            props: true
        },
        {
            path: "/new_clients",
            component: New_Client,
            name: "new_client"
        },
        {
            path: "/edit_client/:id",
            component: ClientUpdate,
            name: "edit_client",
            props: true
        },

        { path: "/documents", component: Documents, name: "document" },
        { path: "/About", component: About, name: "about" },
        { path: "/Contact", component: Contact, name: "contact" }
    ]
};
