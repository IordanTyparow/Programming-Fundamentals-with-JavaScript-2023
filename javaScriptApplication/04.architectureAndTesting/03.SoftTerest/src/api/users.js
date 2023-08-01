import { updateNav } from "../api/navigation.js";
import { del, get, post } from "./api.js";

let endPoints = {
    login: "/users/login",
    register: "/users/register",
    logout: '/users/logout',
    createIdea: '/data/ideas',
    deleteIdea: '/data/ideas/',
}

export async function login(email, password) {
    let user = await post(endPoints.login, { email, password });
    sessionStorage.setItem('user', JSON.stringify(user));

    updateNav();
}

export async function register(email, password) {
    let user = await post(endPoints.register, { email, password });
    sessionStorage.setItem('user', JSON.stringify(user));

    updateNav();
}

export async function logout() {
    let user = JSON.parse(sessionStorage.getItem('user'));

    await fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: { 'X-Authorization': user.accessToken },
    });

    sessionStorage.removeItem('user');

    updateNav();
}

export async function createIdea(title, description, img) {
    await post(endPoints.createIdea, { title, description, img });
}

export async function deleteIdea(id) {
    await del(endPoints.deleteIdea + id);
}