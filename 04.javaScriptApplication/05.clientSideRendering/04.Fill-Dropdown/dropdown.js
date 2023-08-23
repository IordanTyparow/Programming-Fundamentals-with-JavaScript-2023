import { html, render } from "./node_modules/lit-html/lit-html.js";
import { getAllItems } from "./api.js";
import { postItem } from "./api.js";

let allItems = await getAllItems();
let menu = document.getElementById('menu');

let templates = html`
    ${Object.values(allItems).map(x => html`<option value=${x._id}>${x.text}</option>`)}
`;

render(templates, menu);

let inputText = document.getElementById('itemText');
let addBtn = document.querySelector('input[type="submit"]');
addBtn.addEventListener('click', addItem);

function addItem() {
    if (!inputText) {
        return;
    }

    postItem(inputText.value);
}