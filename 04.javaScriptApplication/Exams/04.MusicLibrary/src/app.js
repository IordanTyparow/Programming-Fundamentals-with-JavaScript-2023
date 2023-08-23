import page from "../node_modules/page/page.mjs";

import { addSession } from "./middlewares/session.js";
import { addRender } from "./middlewares/render.js";

import { homePage } from "./views/homePage.js";
import { dashboardPage } from "./views/dashboardPage.js";
import { loginPage } from "./views/loginPage.js";
import { registerPage } from "./views/registerPage.js";
import { createPage } from "./views/createPage.js";
import { detailsPage } from "./views/detailsPage.js";
import { editPage } from "./views/editPage.js";

page(addSession);
page(addRender);

page("/", homePage);
page("/dashboard", dashboardPage);
page("/login", loginPage);
page("/register", registerPage);
page("/create", createPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);

page.start();
