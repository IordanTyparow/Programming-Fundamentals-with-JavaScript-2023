import * as api from "../api/api.js";

let endPoints = {
    ideas: '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    ideaById: '/data/ideas/',
};

export async function getAllIdeas() {
    return api.get(endPoints.ideas);
}

export async function getIdeaById(id) {
    return api.get(endPoints.ideaById + id);
}
