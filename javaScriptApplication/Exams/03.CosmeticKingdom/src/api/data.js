import * as api from "./api.js";

let endPoints = {
  allProducts: "/data/products?sortBy=_createdOn%20desc",
  create: "/data/products",
  delete: "/data/products/",
  editProduct: "/data/products/",
  getById: "/data/products/",
};

export async function getAllProducts() {
  return await api.get(endPoints.allProducts);
}

export async function createProduct(
  name,
  imageUrl,
  category,
  description,
  price
) {
  return await api.post(endPoints.create, {
    name,
    imageUrl,
    category,
    description,
    price,
  });
}

export async function getProductById(id) {
  return api.get(endPoints.getById + id);
}

export async function deleteProduct(id) {
  return api.del(endPoints.delete + id);
}

export async function editProductById(
  id,
  name,
  imageUrl,
  category,
  description,
  price
) {
  await api.put(endPoints.editProduct + id, {
    name,
    imageUrl,
    category,
    description,
    price,
  });
}
