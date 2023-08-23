import { updateNav } from "../util.js";

export async function logout() {
    let user = JSON.parse(sessionStorage.getItem('user'));

    await fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: { 'X-Authorization': user.accessToken }
    })

    sessionStorage.removeItem('user');

    updateNav();
}
