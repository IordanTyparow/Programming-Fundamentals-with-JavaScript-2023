import { html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";

import { deleteEvent, getEventById } from "../api/data.js";

let detailsTemplate = (event, user, onDelete) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${event.imageUrl}" alt="example1" />
      <p id="details-title">${event.name}</p>
      <p id="details-category">
        Category: <span id="categories">${event.category}</span>
      </p>
      <p id="details-date">Date:<span id="date">${event.date}</span></p>
      <div id="info-wrapper">
        <div id="details-description">
          <span>${event.description}</span>
        </div>
      </div>

      <h3>Going: <span id="go"></span> times.</h3>

      <div id="action-buttons">
        ${event._ownerId === user?._id
          ? html`<a href="/edit/${event._id}" id="edit-btn">Edit</a>
              <a href="/delete/${event._id}" id="delete-btn">Delete</a>`
          : html`<a href="" id="go-btn">Going</a>`}
      </div>
    </div>
  </section>
`;

export async function detailsPage(ctx) {
  let id = ctx.params.id;

  let event = await getEventById(id);

  ctx.render(detailsTemplate(event, ctx.user));
}
