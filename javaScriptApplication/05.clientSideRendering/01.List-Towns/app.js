import { html } from "./node_modules/lit-html/lit-html.js";
import { render } from "./node_modules/lit-html/lit-html.js";

let template = (item) => html`
    <li>${item}</li>`;

let allUl = (items) => html`
    <ul>
        ${items.map(x => template(x))}
    </ul>`;

function rendering() {
    let loadBtn = document.getElementById('btnLoadTowns');
    loadBtn.addEventListener('click', onLoad);

    let resultDiv = document.getElementById('root');

    let town = document.getElementById('towns');

    function onLoad(e) {
        e.preventDefault();

        if (town.value === '') {
            return;
        }

        render(allUl(town.value.split(', ')), resultDiv);
        town.value = '';
    }
}

rendering();