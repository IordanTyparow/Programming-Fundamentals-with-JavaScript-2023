import { showView } from "../util.js";
import { homePage } from "./homePage.js";

let section = document.getElementById('add-movie');

export function create() {
    showView(section);
}

let addBtn = document.querySelector('.btn.btn-primary');
addBtn.addEventListener('click', addMovie);

async function addMovie(e) {
    e.preventDefault();

    let user = JSON.parse(sessionStorage.getItem('user'));

    let form = document.getElementById('add-movie-form');
    let formData = new FormData(form);

    let title = formData.get('title');
    let description = formData.get('description');
    let img = formData.get('img');

    if (!title || !description || !img) {
        alert('Fill input Fields!');
    }

    if (title && description && img) {
        try {
            let response = await fetch('http://localhost:3030/data/movies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': user.accessToken,
                },
                body: JSON.stringify({ title, description, img }),
            });

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            form.reset();
            homePage();
        } catch (error) {
            alert(error.message);
        }
    }
}