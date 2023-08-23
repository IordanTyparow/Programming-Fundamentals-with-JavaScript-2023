import * as api from "./api.js";

let endPoints = {
  getAll: "/data/events?sortBy=_createdOn%20desc",
  getById: "/data/events/",
  create: "/data/events",
  update: "/data/events/",
  delete: "/data/events/",
  likeEvent: "/data/going",
  likes: (id) =>
    `/data/going?where=event%3D%22${encodeURIComponent(
      id
    )}%22&distinct=_ownerId&count`,
  getOwn: (eventId, userId) =>
    `/data/going?where=eventId%3D%22${encodeURIComponent(
      eventId
    )}%22%20and%20_ownerId%3D%22${encodeURIComponent(userId)}%22&count`,
};

export async function getAllEvents() {
  return await api.get(endPoints.getAll);
}

export async function getEventById(id) {
  return await api.get(endPoints.getById + id);
}

export async function createEvent(name, imageUrl, category, description, date) {
  await api.post(endPoints.create, {
    name,
    imageUrl,
    category,
    description,
    date,
  });
}

export async function updateEvent(
  id,
  name,
  imageUrl,
  category,
  description,
  date
) {
  await api.put(endPoints.update + id, {
    name,
    imageUrl,
    category,
    description,
    date,
  });
}

export async function deleteEvent(id) {
  await api.del(endPoints.delete + id);
}

export async function postLikeById(eventId) {
  let result = await api.post(endPoints.likeEvent, { eventId });

  return result;
}

export async function getLikes(eventId) {
  return await api.get(endPoints.likes(eventId));
}

export async function getOwnGoing(eventId, userId) {
  return await api.get(endPoints.getOwn(eventId, userId));
}
