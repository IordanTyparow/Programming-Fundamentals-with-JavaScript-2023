import page from "../node_modules/page/page.mjs";

import { addRender } from "./middleWares/render.js";
import { addSession } from "./middleWares/session.js";
import { createPage } from "./views/createPage.js";
import { dashboardPage } from "./views/dashboardPage.js";
import { detailsPage } from "./views/detailsPage.js";
import { editPage } from "./views/editPage.js";
import { homePage } from "./views/homePage.js";
import { loginPage } from "./views/loginPage.js";
import { registerPage } from "./views/registerPage.js";
import { searchPage } from "./views/searchPage.js";

page(addSession);
page(addRender);

page("/", homePage);
page("/dashboard", dashboardPage);
page("/login", loginPage);
page("/register", registerPage);
page("/create", createPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
page("/search", searchPage);

page.start();
