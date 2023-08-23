import * as api from "./api.js";

let endPoints = {
  getAll: "/data/posts?sortBy=_createdOn%20desc",
  getById: "/data/posts/",
  create: "/data/posts",
  edit: "/data/posts/",
  delete: "/data/posts/",
  getMy: (userId) =>
    `/data/posts?where=_ownerId%3D%22${encodeURIComponent(
      userId
    )}%22&sortBy=_createdOn%20desc`,
};

export async function getAllMaterials() {
  return api.get(endPoints.getAll);
}

export async function getMaterialById(id) {
  return api.get(endPoints.getById + id);
}

export async function createMaterial(
  title,
  description,
  imageUrl,
  address,
  phone
) {
  await api.post(endPoints.create, {
    title,
    description,
    imageUrl,
    address,
    phone,
  });
}

export async function editMaterialById(
  id,
  title,
  description,
  imageUrl,
  address,
  phone
) {
  await api.put(endPoints.edit + id, {
    title,
    description,
    imageUrl,
    address,
    phone,
  });
}

export async function deleteById(id) {
  await api.del(endPoints.delete + id);
}

export async function getMyPosts(id) {
  return api.get(endPoints.getMy(id));
}
