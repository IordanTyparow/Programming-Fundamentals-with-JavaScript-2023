import { html, render } from "../../node_modules/lit-html/lit-html.js";

import { registerRequest } from "../api/user.js";

let main = document.getElementById('main');

let context = null;
export function registerPage(ctx) {
    context = ctx;

    let template = html`
    <section id="register">
                <div class="form">
                    <h2>Register</h2>
                    <form class="register-form">
                        <input type="text" name="email" id="register-email" placeholder="email" />
                        <input type="password" name="password" id="register-password" placeholder="password" />
                        <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                        <button type="submit" @click=${onRegister}>register</button>
                        <p class="message">Already registered? <a href="/login">Login</a></p>
                    </form>
                </div>
            </section>
    `;

    render(template, main);
}

async function onRegister(e) {
    e.preventDefault();

    let form = e.target.parentNode;
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');
    let rePassword = formData.get('re-password');

    if (!email || !password || !rePassword) {
        return;
    }

    let response = await fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    let user = await response.json();

    sessionStorage.setItem('user', JSON.stringify(user));

    context.templateNav;
    window.location = '/';
}