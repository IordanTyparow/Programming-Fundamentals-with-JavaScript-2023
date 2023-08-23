import { html, render } from "/node_modules/lit-html/lit-html.js";

let user = sessionStorage.getItem('user');
let navigationBody = document.querySelector('#navigation');

export const navigation = (ctx, next) => {
  let templateNav = html`
    <!-- Navigation -->
    <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>
    <nav>
      <div>
        <a href="/fruits">Fruits</a>
        <a href="/search">Search</a>
      </div>

      <!-- Logged-in users -->
      ${user ? html`<div class="user">
        <a href="/create">Add Fruit</a>
        <a href="javascript:void(0)" @click=${onDeleteStorage}>Logout</a>
      </div>` :
      html`<div class="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>`}
      </div>
    </nav>
    `;

  ctx.templateNav = templateNav;

  render(templateNav, navigationBody);
  next();
}

async function onDeleteStorage() {
  await fetch('http://localhost:3030/users/logout', {
    method: 'GET',
    headers: { 'X-Authorization': user.accessToken }
  });

  sessionStorage.removeItem('user');
  window.location = '/';
}