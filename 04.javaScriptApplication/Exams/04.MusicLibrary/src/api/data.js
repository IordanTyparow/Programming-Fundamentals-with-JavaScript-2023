import * as api from "./api.js";

let endPoints = {
  getAll: "/data/albums?sortBy=_createdOn%20desc",
  createAlbum: "/data/albums",
  getById: "/data/albums/",
  editById: "/data/albums/",
  delete: "/data/albums/",
  likeMusic: "/data/likes",
  getLikesForCurrentAlbum: (albumId) =>
    `/data/likes?where=albumId%3D%22${encodeURIComponent(
      albumId
    )}%22&distinct=_ownerId&count`,
  getCountOfuserLikes: (albumId, userId) =>
    `/data/likes?where=albumId%3D%22${encodeURIComponent(
      albumId
    )}%22%20and%20_ownerId%3D%22${encodeURIComponent(userId)}%22&count`,
};

export function getAllAlbums() {
  return api.get(endPoints.getAll);
}

export async function create(singer, album, imageUrl, release, label, sales) {
  await api.post(endPoints.createAlbum, {
    singer,
    album,
    imageUrl,
    release,
    label,
    sales,
  });
}

export async function getAlbumById(id) {
  return await api.get(endPoints.getById + id);
}

export async function editAlbum(
  id,
  singer,
  album,
  imageUrl,
  release,
  label,
  sales
) {
  await api.put(endPoints.editById + id, {
    singer,
    album,
    imageUrl,
    release,
    label,
    sales,
  });
}

export async function deleteAlbum(id) {
  await api.del(endPoints.delete + id);
}

export async function likeRequest(albumId) {
  return await api.post(endPoints.likeMusic, { albumId });
}

export async function getLikes(albumId) {
  return api.get(endPoints.getLikesForCurrentAlbum(albumId));
}

export async function currentUserLikes(albumId, userId) {
  return api.get(endPoints.getCountOfuserLikes(albumId, userId));
}
