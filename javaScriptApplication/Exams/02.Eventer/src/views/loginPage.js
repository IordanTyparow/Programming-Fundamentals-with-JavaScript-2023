import { html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { login } from "../api/userService.js";

let loginTemplate = (onSubmit) => html`
 <section id="login">
        <div class="form">
          <h2>Login</h2>
          <form class="login-form" @submit=${onSubmit}>
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
              Not registered? <a href="/register">Create an account</a>
            </p>
          </form>
        </div>
      </section>
`;

export function loginPage(ctx) {
  ctx.render(loginTemplate(onSubmit));
}

async function onSubmit(e) {
  e.preventDefault();

  let form = e.target;
  let formData = new FormData(form);

  let email = formData.get('email');
  let password = formData.get('password');

  if (!email || !password) {
    return;
  }

  await login(email, password);
  page.redirect('/');
}

