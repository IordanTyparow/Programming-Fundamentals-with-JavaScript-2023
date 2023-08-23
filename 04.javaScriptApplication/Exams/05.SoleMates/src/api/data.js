import * as api from "./api.js";

let endPoints = {
  getAll: "/data/shoes?sortBy=_createdOn%20desc",
  create: "/data/shoes",
  getShoeById: "/data/shoes/",
  editShoeById: "/data/shoes/",
  deleteShoe: "/data/shoes/",
  searchByQuery: (query) =>
    `/data/shoes?where=brand%20LIKE%20%22${encodeURIComponent(query)}%22`,
};

export function getAllShoes() {
  return api.get(endPoints.getAll);
}

export function createShoe(brand, model, imageUrl, release, designer, value) {
  api.post(endPoints.create, {
    brand,
    model,
    imageUrl,
    release,
    designer,
    value,
  });
}

export function getShoeById(id) {
  return api.get(endPoints.getShoeById + id);
}

export function editShoe(id, brand, model, imageUrl, release, designer, value) {
  api.put(endPoints.editShoeById + id, {
    brand,
    model,
    imageUrl,
    release,
    designer,
    value,
  });
}

export function deleteShoeById(id) {
  api.del(endPoints.deleteShoe + id);
}

export function querySearch(query) {
  return api.get(endPoints.searchByQuery(query));
}
