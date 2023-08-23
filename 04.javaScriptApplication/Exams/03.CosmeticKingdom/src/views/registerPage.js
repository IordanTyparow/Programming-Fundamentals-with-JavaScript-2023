import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/userService.js";

let registerTemplate = (onRegister) =>
  html`<section id="register">
    <div class="form">
      <h2>Register</h2>
      <form class="register-form" @submit="${onRegister}">
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
  </section>`;

export function registerPage(ctx) {
  async function onRegister(e) {
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);

    let email = formData.get("email");
    let password = formData.get("password");
    let rePassword = formData.get("re-password");

    if (!email || !password || !rePassword) {
      alert("All Fields is requred!");
      return;
    } else if (password !== rePassword) {
      alert("Passwords is not match!");
      return;
    }

    await register(email, password);
    ctx.page.redirect("/");
  }

  ctx.render(registerTemplate(onRegister));
}
