import { login } from "../api/users.js";

let section = document.getElementById('loginPage');

export function loginPage(context) {
    context.showSection(section);

    let submitBtn = section.querySelector('.btn.btn-lg.btn-dark.btn-block');
    submitBtn.addEventListener('click', (e) => onLogin(e, context));

    let form = section.querySelector('.form-user.col-md-7');

    function onLogin(e, context) {
        e.preventDefault();

        let formData = new FormData(form);

        let email = formData.get('email');
        let password = formData.get('password');

        if (!email || !password) {
            return;
        }

        login(email, password);
        form.reset();
        context.goTo('/');
    }
}

