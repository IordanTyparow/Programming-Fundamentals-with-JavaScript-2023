import { register } from "../api/users.js";

let section = document.getElementById('registerPage');
let form = section.querySelector('.form-user.col-md-7');

export function registerPage(context) {
    context.showSection(section);

    let submitBtn = section.querySelector('.btn.btn-lg.btn-dark.btn-block');
    submitBtn.addEventListener('click', onRegister);

    function onRegister(e) {
        e.preventDefault();

        let formData = new FormData(form);

        let email = formData.get('email');
        let password = formData.get('password');
        let repeatPassword = formData.get('repeatPassword');

        if (!email || !password || !repeatPassword || password !== repeatPassword || email.length < 3 || password.length < 3) {
            return;
        }

        register(email, password);
        form.reset();
        context.goTo('/');
    }
}




