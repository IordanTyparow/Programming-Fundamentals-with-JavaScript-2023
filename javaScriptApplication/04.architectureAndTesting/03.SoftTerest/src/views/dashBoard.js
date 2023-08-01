import { getAllIdeas } from "../api/data.js";

let section = document.getElementById('dashboard-holder');
section.addEventListener('click', onDetailsSelect);

let ctx = null;

export async function dashboardHolder(context) {
    ctx = context;
    ctx.showSection(section);

    let ideas = await getAllIdeas();

    if (ideas.length === 0) {
        let p = document.createElement('p');
        p.textContent = 'No ideas yet! Be the first one :)';

        section.replaceChildren(p);
    }

    section.replaceChildren(...ideas.map(create));
}

function create(idea) {
    let div = document.createElement('div');
    div.setAttribute('class', 'card overflow-hidden current-card details');
    div.setAttribute('id', idea._id);
    div.style.width = '20rem';
    div.style.height = '18rem';

    div.innerHTML = `
    <div class="card-body">
        <p class="card-text">${idea.title}</p>
    </div>
     <img class="card-image" src="${idea.img}" alt="Card image cap">
     <a id="${idea._id}" class="btn" href="/details">Details</a>
    `;

    return div;
}

function onDetailsSelect(e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();

        let id = e.target.id;

        if (id) {
            ctx.goTo('/details', id);
        }
    }
}