import { showView, updateNav } from "../util.js";

let registerPageSection = document.getElementById('form-sign-up');

export function register() {
    showView(registerPageSection);
}

let submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', registerUser);

async function registerUser(e) {
    e.preventDefault();

    let form = document.getElementById('register-form');
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');
    let repeatPassword = formData.get('repeatPassword');

    if (!email || !password || !repeatPassword) {
        alert('Fill All fields!');
        return;
    }

    if (email && password.length <= 6 && password === repeatPassword) {
        try {
            let response = await fetch('http://localhost:3030/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            form.querySelectorAll('input').forEach(x => x.value = '');

            let data = await response.json();
            sessionStorage.setItem('user', JSON.stringify(data));

            updateNav();
            showView(document.getElementById('home-page'));
        } catch (error) {
            form.querySelectorAll('input').forEach(x => x.value = '');
            alert(error.message);
        }
    }
}