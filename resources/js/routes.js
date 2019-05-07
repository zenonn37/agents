import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Account from "./views/Account";
import Clients from "./views/Clients";
import Clients_Show from "./views/Clients_Show";
import New_Client from "./views/New_Client";

import Documents from "./views/Documents";
import About from "./views/About";
import Contact from "./views/Contact";

export default {
    mode: "history",
    routes: [
        { path: "*", component: NotFound },
        { path: "/", component: Home, name: "home" },
        { path: "/account", component: Account, name: "account" },
        { path: "/clients", component: Clients, name: "client" },
        { path: "/clients/:id", component: Clients_Show, name: "client_show" },
        { path: "/new_clients", component: New_Client, name: "new_client" },

        { path: "/documents", component: Documents, name: "document" },
        { path: "/About", component: About, name: "about" },
        { path: "/Contact", component: Contact, name: "contact" }
    ]
};
