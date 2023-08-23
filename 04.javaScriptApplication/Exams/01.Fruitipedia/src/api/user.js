import { post, del, put } from "./api.js";

export async function loginRequest(email, password) {
    let user = await post('/users/login', { email, password });
    sessionStorage.setItem('user', JSON.stringify(user));
}

export async function registerRequest(email, password) {
    let user = await post('/users/register', { email, password });
    sessionStorage.setItem('user', JSON.stringify(user));
}

export async function editRequest(id, name, imageUrl, description, nutrition) {
    await put(`/data/fruits/${id}`, { name, imageUrl, description, nutrition });
}

export async function deleteRequest(id) {
    await del(`/data/fruits/${id}`);
}
