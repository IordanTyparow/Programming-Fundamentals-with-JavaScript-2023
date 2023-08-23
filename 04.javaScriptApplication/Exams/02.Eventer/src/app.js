import page from "../node_modules/page/page.mjs";

import { addRender } from "./middleware/render.js";
import { addSession } from "./middleware/session.js";

import { homePage } from "./views/homePage.js";
import { loginPage } from "./views/loginPage.js";
import { registerPage } from "./views/registerPage.js";
import { eventsPage } from "./views/eventsPage.js";
import { addEvents } from "./views/addEvents.js";
import { detailsPage } from "./views/detailsPage.js";
import { editPage } from "./views/editPage.js";
import { logout } from "./api/userService.js";
import { onDelete } from "./views/deletePage.js";

page(addSession);
page(addRender);

page("/", homePage);
page("/login", loginPage);
page("/register", registerPage);
page("/events", eventsPage);
page("/addEvents", addEvents);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
page("/delete/:id", onDelete);
page("/logout", onLogout);
page("*", homePage);

page.start();

function onLogout() {
  logout();
  page.redirect("/");
}
