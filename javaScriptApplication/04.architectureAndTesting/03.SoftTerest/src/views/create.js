import { createIdea } from "../api/users.js";

let section = document.getElementById('createPage');

let form = section.querySelector('.form-idea.col-md-5');
let createBtn = section.querySelector('.btn.btn-lg.btn-dark.btn-block');
createBtn.addEventListener('click', onCreate);

let ctx = null;

export function createPage(context) {
    context.showSection(section);
    ctx = context;
}

function onCreate(e) {
    e.preventDefault();

    let formData = new FormData(form);

    let title = formData.get('title');
    let description = formData.get('description');
    let img = formData.get('imageURL');

    if (!title || !description || !img) {
        return;
    }

    createIdea(title, description, img);
    form.reset();
    ctx.goTo('/catalog');
}
