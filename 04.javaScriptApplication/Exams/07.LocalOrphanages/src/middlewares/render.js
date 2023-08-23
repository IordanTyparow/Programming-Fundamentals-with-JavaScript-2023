import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { logout } from "../api/userService.js";

let main = document.getElementById("main-content");
let header = document.getElementById("navigation");

let navigationTemplate = (user, onLogout) => html`
  <h1><a href="/">Orphelp</a></h1>

  <nav>
    <a href="/">Dashboard</a>

    ${user
      ? html`<div id="user">
          <a href="/myPosts">My Posts</a>
          <a href="/create">Create Post</a>
          <a href="javascript:void(0)" @click="${onLogout}">Logout</a>
        </div>`
      : html`<div id="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>`}
  </nav>
`;

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
