import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/userService.js";

let template = (onSubmit) => html`
<section id="register">
        <div class="form">
          <h2>Register</h2>
          <form class="register-form" @submit=${onSubmit}>
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
          </form>
        </div>
  </section>
`;

export function registerPage(ctx) {
  ctx.render(template(onSubmit), main);

  async function onSubmit(e) {
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');
    let rePassword = formData.get('re-password');

    if (!email || !password || !rePassword || password !== rePassword) {
      return;
    }

    await register(email, password);
    ctx.page.redirect('/');
  }
}
