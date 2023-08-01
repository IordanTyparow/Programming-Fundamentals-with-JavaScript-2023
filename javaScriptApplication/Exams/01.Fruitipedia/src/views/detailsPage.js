import { html, render } from "../../node_modules/lit-html/lit-html.js";

import { getFruitById } from "../api/data.js";
import { deleteRequest } from "../api/user.js";
import page from "../../node_modules/page/page.mjs";


let main = document.getElementById('main');
let user = JSON.parse(sessionStorage.getItem('user'));

const template = (data) => html`
<section id="details">
                <div id="details-wrapper">
                    <img id="details-img" src="${data.imageUrl}" alt="example1" />
                    <p id="details-title">${data.name}</p>
                    <div id="info-wrapper">
                        <div id="details-description">
                            <p>${data.description}</p>
                            <p id="nutrition">Nutrition</p>
                            <p id="details-nutrition">
                               ${data.nutrition}
                            </p>
                        </div>
                        <!--Edit and Delete are only for creator-->
                        <div id="action-buttons">
                            ${user?._id === data._ownerId ? html`<a href="/details/edit/${data._id}" id="edit-btn">Edit</a><a href="/delete/${data._id}" id="delete-btn">Delete</a>` : ''}
                        </div>
                    </div>
                </div>
`;

export const detailsPage = async (ctx) => {

    let id = ctx.params.id;

    let data = await getFruitById(id);

    render(template(data), main);
}


async function onDelete(id) {
    deleteRequest(id);
    page.redirect('/fruits');
}