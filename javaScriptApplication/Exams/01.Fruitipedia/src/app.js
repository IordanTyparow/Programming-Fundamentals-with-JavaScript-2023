import page from "../node_modules/page/page.mjs";

import { navigation } from "./navigation.js";

import { homePage } from "./views/homePage.js";
import { loginPage } from "./views/loginPage.js";
import { registerPage } from "./views/registerPage.js";
import { fruitsPage } from "./views/fruitsPage.js";
import { createPage } from "./views/createPage.js";
import { detailsPage } from "./views/detailsPage.js";
import { editPage } from "./views/editPage.js";
import { onDelete } from "./views/deletePage.js";

import { searchPage } from "./searchView/searchPage.js";

page(navigation);

page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/fruits', fruitsPage);
page('/details/:id', detailsPage);
page('/details/edit/:id', editPage);
page('/delete/:id', onDelete);
page('/search', searchPage);
page('*', homePage);
page.start();
