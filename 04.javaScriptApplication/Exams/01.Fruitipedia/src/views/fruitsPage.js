import { html, render } from "../../node_modules/lit-html/lit-html.js";

let main = document.getElementById('main');

export const fruitsPage = async (ctx) => {

    let response = await fetch('http://localhost:3030/data/fruits');
    let data = await response.json();

    if (response.status === 404) {
        let template = html`
            <h2>Fruits</h2>
            <h2>No fruit info yet.</h2>
            `;
        render(template, main);
    } else {
        let template = (data) => html`
        <section id="dashboard">
            ${data.map(x => html`
            <div class="fruit">
                    <img src="${x.imageUrl}" alt="example1" />
                    <h3 class="title">${x.name}</h3>
                    <p>${x.description}</p>
                    <a class="details-btn" href="/details/${x._id}">More Info</a>
                </div>
            `)}
        <section/>
        `;

        render(template(data), main);
    }
};

