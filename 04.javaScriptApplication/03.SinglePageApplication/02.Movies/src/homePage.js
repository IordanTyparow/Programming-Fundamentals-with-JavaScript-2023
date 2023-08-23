import { showView } from "../util.js";
import { details } from "./details.js";

let homePageSection = document.getElementById('home-page');

export function homePage() {
    showView(homePageSection);
    loadMovies();
}

async function loadMovies() {
    let response = await fetch('http://localhost:3030/data/movies');
    let data = await response.json();
    let parent = document.getElementById('movies-list');
    parent.innerHTML = '';

    for (const key of Object.values(data)) {
        let div = document.createElement('div');
        div.setAttribute('class', 'card md-4');
        div.dataset.id = key._id;
        div.dataset.ownerId = key._ownerId;

        div.innerHTML = `
        <img class="card-img-top" src="${key.img}" alt="Card image cap" width="400"></img>
        <div class="card-body">
        <h4 class="cart-title">${key.title}</h4>
        </div>
        <div class="card-footer">
            <a href="/details"
            <button type="button" class="btn btn-info">Details</button>
            </a>
            </div>
            `;

        parent.appendChild(div);
    }
}

document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault();

    showView(document.getElementById('add-movie'));
});

document.getElementById('movies-list').addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.tagName === 'A' && e.target.href) {
        let id = e.target.parentNode.parentNode.dataset.id;
        let ownerId = e.target.parentNode.parentNode.dataset.ownerId;

        details(id, ownerId);
    }
}); 