import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { loginRequest } from "../api/user.js";

let main = document.getElementById('main');

let context = null;
export const loginPage = (ctx, next) => {
    context = ctx;

    let template = html`
    <section id="login">
        <div class="form">
            <h2>Login</h2>
                <form class="login-form">
                    <input type="text" name="email" id="email" placeholder="email" />
                    <input type="password" name="password" id="password" placeholder="password" />
                    <button type="submit" @click=${onClick}>login</button>
                    <p class="message">Not registered?<a href="/register">Create an account</a></p>
                </form>
        </div>
    </section>`;

    render(template, main);
}

function onClick(e) {
    e.preventDefault();

    let form = document.querySelector('#main .login-form');
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');

    if (!email || !password) {
        return;
    }

    loginRequest(email, password);
    context.templateNav;
    window.location = '/';
}