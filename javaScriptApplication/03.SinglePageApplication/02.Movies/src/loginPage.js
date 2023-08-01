import { showView, updateNav } from "../util.js";

let loginPageSection = document.getElementById('form-login');

export function loginPage() {
    showView(loginPageSection);
}

let loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', onLogin);

async function onLogin(e) {
    e.preventDefault();

    let form = document.getElementById('login-form');
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');

    if (!email || !password) {
        alert('Email and password is required!');
        return;
    }

    if (email && password) {
        try {
            let response = await fetch('http://localhost:3030/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            let data = await response.json();

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            form.querySelectorAll('input').forEach(x => x.value = '');

            sessionStorage.setItem('user', JSON.stringify(data));

            updateNav();
            showView(document.getElementById('home-page'));
        } catch (error) {
            alert(Error.message);
        }
    }
}