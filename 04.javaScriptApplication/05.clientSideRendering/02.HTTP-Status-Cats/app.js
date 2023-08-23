import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

let templateCat = (data) => html`
    <li>
        <img src="./images/${data.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
        <button class="showBtn" @click="${onClick}">Show status code</button>
        <div class="status" style="display: none" id="${data.id}">
        <h4>Status Code: ${data.statusCode}</h4>
                <p>${data.statusMessage}</p>
            </div>
        </div>
    </li>
`;

let catsTemplate = cats.map(templateCat);

let section = document.getElementById('allCats');
render(html`<ul>${catsTemplate}</ul>`, section);


function onClick(e) {
    let infoDiv = e.target.parentNode;

    let result = infoDiv.querySelector('.status').style.display;

    if (result === 'block') {
        infoDiv.querySelector('.showBtn').textContent = 'Show status code';
        infoDiv.querySelector('.status').style.display = 'none';
    } else {
        infoDiv.querySelector('.showBtn').textContent = 'Hide status code';
        infoDiv.querySelector('.status').style.display = 'block';
    }
}