import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { logout } from "../api/userService.js";

let main = document.getElementById("main");
let header = document.getElementById("navigation");

let navigationTemplate = (user, onLogout) => html` <a id="logo" href="/"
    ><img id="logo-img" src="./images/logo.png" alt=""
  /></a>

  <nav>
    <div>
      <a href="/dashboard">Dashboard</a>
    </div>

    ${user
      ? html` <div class="user">
          <a href="/create">Add Album</a>
          <a href="javascript:void(0)" @click="${onLogout}">Logout</a>
        </div>`
      : html`<div class="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>`}
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
  page.redirect("/dashboard");
}
