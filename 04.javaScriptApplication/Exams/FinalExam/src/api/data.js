import * as api from "./api.js";

let endPoints = {
  getAllFacts: "/data/facts?sortBy=_createdOn%20desc",
  create: "/data/facts",
  getById: "/data/facts/",
  edit: "/data/facts/",
  delete: "/data/facts/",
  like: "/data/likes",
  own: (factId) =>
    `/data/likes?where=factId%3D%22${encodeURIComponent(
      factId
    )}%22&distinct=_ownerId&count`,
  currentUserLikes: (factId, userId) =>
    `/data/likes?where=factId%3D%22${encodeURIComponent(
      factId
    )}%22%20and%20_ownerId%3D%22${encodeURIComponent(userId)}%22&count`,
};

export async function getAllFacts() {
  return api.get(endPoints.getAllFacts);
}

export async function createFact(category, imageUrl, description, moreInfo) {
  await api.post(endPoints.create, {
    category,
    imageUrl,
    description,
    moreInfo,
  });
}

export async function getFactById(id) {
  return api.get(endPoints.getById + id);
}

export async function editById(id, category, imageUrl, description, moreInfo) {
  await api.put(endPoints.edit + id, {
    category,
    imageUrl,
    description,
    moreInfo,
  });
}

export async function deleteById(id) {
  await api.del(endPoints.delete + id);
}

export async function like(factId) {
  await api.post(endPoints.like, { factId });
}

export async function ownLikes(factId) {
  return api.get(endPoints.own(factId));
}

export async function currentUserLike(factId, userId) {
  return api.get(endPoints.currentUserLikes(factId, userId));
}
