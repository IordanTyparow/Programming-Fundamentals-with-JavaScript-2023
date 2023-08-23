import { logout } from "../api/users.js";

let section = document.getElementById('homePage');

let logoutBtn = document.querySelector('nav ul li:nth-child(3) a');
logoutBtn.addEventListener('click', onLogout);

function onLogout() {
    logout();
}

export function homePage(context) {
    context.showSection(section);
}

