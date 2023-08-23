import { getIdeaById } from "../api/data.js";
import { deleteIdea } from "../api/users.js";

let section = document.getElementById('somePage');

export async function detailPage(context, id) {
    context.showSection(section);

    let idea = await getIdeaById(id);

    section.innerHTML = createDetailPage(idea);

    function createDetailPage(idea) {
        let html = `
        <img data-id="${idea._id}" class="det-img" src="${idea.img}">
        <div class="desc">
             <h2 class="display-5">${idea.title}</h2>
             <p class="infoType">Description:</p>
             <p class="idea-description">${idea.description}</p>
         </div>
         <div class="text-center">
            ${button()}
         </div>
        `;

        return html;
    }


    function button() {
        let user = JSON.parse(sessionStorage.getItem('user'));

        if (user) {
            if (user._id === idea._ownerId) {
                return `<a id="${idea._id}" class="btn detb" href="">Delete</a>`;
            }
        }

        return '';
    }

    section.querySelector('.btn.detb').addEventListener('click', onDelete);
    function onDelete(e) {
        e.preventDefault();

        let ideaId = e.target.id;

        deleteIdea(ideaId);
        context.goTo('/catalog');
    }

}


