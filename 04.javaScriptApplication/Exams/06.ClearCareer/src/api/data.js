import * as api from "./api.js";

let endPoints = {
  getAll: "/data/offers?sortBy=_createdOn%20desc",
  create: "/data/offers",
  getById: "/data/offers/",
  updateById: "/data/offers/",
  delete: "/data/offers/",
  applyOfferts: "/data/applications",
  getAllApply: (offerId) =>
    `/data/applications?where=offerId%3D%22${encodeURIComponent(
      offerId
    )}%22&distinct=_ownerId$count`,
};

export async function getAllOffers() {
  return api.get(endPoints.getAll);
}

export async function createOffert(
  title,
  imageUrl,
  category,
  description,
  requirements,
  salary
) {
  await api.post(endPoints.create, {
    title,
    imageUrl,
    category,
    description,
    requirements,
    salary,
  });
}

export async function getOffertById(id) {
  return api.get(endPoints.getById + id);
}

export async function updateOffertById(
  id,
  title,
  imageUrl,
  category,
  description,
  requirements,
  salary
) {
  await api.put(endPoints.updateById + id, {
    title,
    imageUrl,
    category,
    description,
    requirements,
    salary,
  });
}

export async function deleteById(id) {
  await api.del(endPoints.delete + id);
}

export async function applyOffert(offerId) {
  await api.post(endPoints.applyOfferts, { offerId });
}

export async function getApply(offerId) {
  return api.get(endPoints.getAllApply(offerId));
}
