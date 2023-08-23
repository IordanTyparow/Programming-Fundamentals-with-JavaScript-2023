import { clearUserData, setUserData } from "../utility.js";
import * as api from "./api.js";

let endPoint = {
    login: '/users/login',
    logout: '/users/logout',
    register: '/users/register',
}

export async function login(email, password) {
    let result = await api.post(endPoint.login, { email, password });
    setUserData(result);

    return result;
}

export async function register(email, password) {
    let result = await api.post(endPoint.register, { email, password });
    setUserData(result);

    return result;
}

export async function logout() {
    api.get(endPoint.logout);
    clearUserData();
}