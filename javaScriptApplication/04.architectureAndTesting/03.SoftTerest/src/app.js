import { initialize } from "./router.js";
import { updateNav } from "./api/navigation.js";

import { homePage } from "./views/home.js";
import { registerPage } from "./views/register.js";
import { dashboardHolder } from "./views/dashBoard.js";
import { detailPage } from "./views/details.js";
import { createPage } from "./views/create.js";
import { loginPage } from "./views/login.js";

let routes = {
    '/': homePage,
    '/catalog': dashboardHolder,
    '/login': loginPage,
    '/register': registerPage,
    '/create': createPage,
    '/details': detailPage,
}

let router = initialize(routes);
router.goTo('/');
updateNav();