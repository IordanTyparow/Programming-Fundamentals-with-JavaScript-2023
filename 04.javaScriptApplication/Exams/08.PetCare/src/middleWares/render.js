import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { logout } from "../api/userService.js";

let main = document.getElementById("content");
let header = document.getElementById("navigation");

let navigationTemplate = (user, onLogout) => html` <nav>
  <section class="logo">
    <img src="./images/logo.png" alt="logo" />
  </section>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/dashboard">Dashboard</a></li>
    ${user
      ? html`<li><a href="/create">Create Postcard</a></li>
          <li><a href="javascript:void(0)" @click="${onLogout}">Logout</a></li>`
      : html`<li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>`}
  </ul>
</nav>`;

function ctxRender(template) {
  render(template, main);
}

export function addRender(ctx, next) {
  render(navigationTemplate(ctx.user, onLogout), header);
  ctx.render = ctxRender;

  next();
}

async function onLogout() {
  await logout();
  page.redirect("/");
}
