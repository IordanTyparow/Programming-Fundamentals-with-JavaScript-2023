import * as api from "./api.js";

let endPoints = {
  getAllPets: "/data/pets?sortBy=_createdOn%20desc&distinct=name",
  createPostCard: "/data/pets",
  getById: "/data/pets/",
  editCard: "/data/pets/",
  deleteCard: "/data/pets/",
};

export async function getAllPets() {
  return api.get(endPoints.getAllPets);
}

export async function create(name, breed, age, weight, image) {
  await api.post(endPoints.createPostCard, { name, breed, age, weight, image });
}

export async function getPetById(id) {
  return api.get(endPoints.getById + id);
}

export async function edit(id, name, breed, age, weight, image) {
  await api.put(endPoints.editCard + id, { name, breed, age, weight, image });
}

export async function deleteCard(id) {
  await api.del(endPoints.deleteCard + id);
}
