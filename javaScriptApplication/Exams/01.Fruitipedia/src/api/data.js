import { get, post } from "./api.js";

let endPoints = {
    allFruits: '/data/fruits',
    addNewFruit: '/data/fruits',
    getById: '/data/fruits/',
};

export async function getAllFruits() {
    return await get(endPoints.allFruits);
}

export async function addNewFruit(name, imageUrl, description, nutrition) {
    post(endPoints.addNewFruit, { name, imageUrl, description, nutrition });
}

export async function getFruitById(id) {
    return await get(endPoints.getById + id);
}

export async function getFruitsByQueryParameters(params) {
    return get(`/data/fruits?where=${params}`);
}