import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getFruitById } from "../api/data.js";

import { editRequest } from "../api/user.js";
import page from "../../node_modules/page/page.mjs";

let main = document.getElementById('main');

let template = (data) => html`
 <section id="edit">
    <div class="form">
        <h2>Edit Fruit</h2>
            <form class="edit-form" id="${data._id}">
                <input type="text" name="name" id="name" placeholder="Fruit Name" value="${data.name}"/>
                <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image URL" value="${data.imageUrl}"/>
                <textarea id="fruit-description" name="description" placeholder="Description" rows="10"cols="50">${data.description}</textarea>
                <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10"cols="50">${data.nutrition}</textarea>
                <button type="submit" @click="${onEdit}">post</button>
            </form>
    </div>
</section>
`;

export const editPage = async (ctx) => {

    let id = ctx.params.id;

    let data = await getFruitById(id);

    render(template(data), main);
}

async function onEdit(e) {
    e.preventDefault();

    let formData = new FormData(e.target.parentNode);
    let id = e.target.parentNode.id;

    let name = formData.get('name');
    let imageUrl = formData.get('imageUrl');
    let description = formData.get('description');
    let nutrition = formData.get('nutrition');

    if (!name || !imageUrl || !description || !nutrition) {
        return;
    }

    editRequest(id, name, imageUrl, description, nutrition);
    page.redirect(`/details/${id}`);
}