import { homePage } from "./src/homePage.js";
import { loginPage } from "./src/loginPage.js";
import { register } from "./src/registerPage.js";
import { updateNav } from "./util.js";
import { details } from "./src/details.js";
import { create } from './src/create.js';
import { logout } from "./src/logout.js";

let router = {
    '/': homePage,
    '/login': loginPage,
    '/register': register,
    '/logout': logout,
    '/create': create,
    '/details': details,
}

let navigation = document.querySelector('nav');
navigation.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.href) {
        e.preventDefault();

        let currentNav = new URL(e.target.href);
        let view = router[currentNav.pathname];
        if (typeof view === 'function') {
            view();
        }
    }
});

updateNav();
homePage();

