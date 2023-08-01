import { html, render } from "../../node_modules/lit-html/lit-html.js";

import { addNewFruit } from "../api/data.js";

let main = document.getElementById('main');

let context = null;
export const createPage = async (ctx) => {
    context = ctx;
    let template = html`
    <section id="create">
                <div class="form">
                    <h2>Add Fruit</h2>
                    <form class="create-form">
                        <input type="text" name="name" id="name" placeholder="Fruit Name" />
                        <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image" />
                        <textarea id="fruit-description" name="description" placeholder="Description" rows="10"
                            cols="50"></textarea>
                        <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10"
                            cols="50"></textarea>
                        <button type="submit" @click=${onAdd}>Add Fruit</button>
                    </form>
                </div>
    </section>
     `;

    render(template, main);
}

async function onAdd(e) {
    e.preventDefault();

    let form = e.target.parentNode;
    let formData = new FormData(form);

    let name = formData.get('name');
    let imageUrl = formData.get('imageUrl');
    let description = formData.get('description');
    let nutrition = formData.get('nutrition');

    if (!name || !imageUrl || !description || !nutrition) {
        return;
    }

    addNewFruit(name, imageUrl, description, nutrition);
    form.reset();
    context.page.redirect('/fruits');
}