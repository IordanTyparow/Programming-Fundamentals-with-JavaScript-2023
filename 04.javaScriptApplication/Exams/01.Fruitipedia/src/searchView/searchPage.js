import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getFruitsByQueryParameters } from "../api/data.js";

let main = document.getElementById('main');

let template = html`
<section id="search">
                <div class="form">
                    <h2>Search</h2>
                    <form class="search-form">
                        <input type="text" name="search" id="search-input" />
                        <button class="button-list" @click="${onSearch}">Search</button>
                    </form>
                </div>
                <h4>Results:</h4>
                <div class="search-result">
                    <p class="no-result">No result.</p>
                </div>
            </section>
`;

export async function searchPage(ctx) {
    render(template, main);
}

async function onSearch(e) {
    e.preventDefault();

    let searchInput = document.getElementById('search-input').value;

    let queryParams = encodeURIComponent(`name like "${searchInput}"`);

    let data = await getFruitsByQueryParameters(queryParams);

    let sectionMatches = document.querySelector('.search-result');

    if (data.length === 0) {
        return;
    }

    let template = (data) => html`
                    ${data.map(x => html`
                    <div class="fruit">
                        <img src="${x.imageUrl}" alt="example1" />
                        <h3 class="title">${x.name}</h3>
                        <p class="description">${x.description}</p>
                        <a class="details-btn" href="/details/${x._id}">More Info</a>
                    </div>
                    `)}
    `;

    render(template(data), sectionMatches);
}