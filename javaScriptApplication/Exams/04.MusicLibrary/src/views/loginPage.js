import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/userService.js";

let loginTemplate = (onLogin) => html`<section id="login">
  <div class="form">
    <h2>Login</h2>
    <form class="login-form" @submit="${onLogin}">
      <input type="text" name="email" id="email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button type="submit">login</button>
      <p class="message">
        Not registered? <a href="/register">Create an account</a>
      </p>
    </form>
  </div>
</section>`;

export function loginPage(ctx) {
  async function onLogin(e) {
    e.preventDefault();

    let form = e.target;

    console.log(form);
    let formData = new FormData(form);

    let email = formData.get("email");
    let password = formData.get("password");

    if (!email || !password) {
      alert("Email & password is required!");
      return;
    }

    await login(email, password);
    ctx.page.redirect("/dashboard");
  }

  ctx.render(loginTemplate(onLogin));
}
