import { html, render } from "../../node_modules/lit-html/lit-html.js";

let main = document.getElementById('main');
let header = document.getElementById('navigation');

let navigationTemplate = (user) => html`
      <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt=""/></a>
      <nav>
        <div>
          <a href="/events">Events</a>
        </div>

        ${user
    ? html` <div class="user">
          <a href="/addEvents">Add Event</a>
          <a href="/logout">Logout</a>
        </div>`
    : html`<div class="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>`}
      </nav>
`;

function ctxRender(template) {
  render(template, main);
}

export function addRender(ctx, next) {
  render(navigationTemplate(ctx.user), header);
  ctx.render = ctxRender;

  next();
}
