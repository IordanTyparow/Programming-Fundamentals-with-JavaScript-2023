import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { deleteById, getOffertById } from "../api/data.js";

let detailsTemplate = (offert, user, onDelete) => {
  let isCreator = offert._ownerId === user?._id;

  return html` <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${offert.imageUrl}" alt="example1" />
      <p id="details-title">${offert.title}</p>
      <p id="details-category">
        Category: <span id="categories">${offert.category}</span>
      </p>
      <p id="details-salary">
        Salary: <span id="salary-number">${offert.salary}</span>
      </p>
      <div id="info-wrapper">
        <div id="details-description">
          <h4>Description</h4>
          <span>${offert.description}</span>
        </div>
        <div id="details-requirements">
          <h4>Requirements</h4>
          <span>${offert.requirements}</span>
        </div>
      </div>
      <p>
        Applications:
        <strong id="applications">1</strong>
      </p>

      <div id="action-buttons">
        ${user
          ? html`<div id="action-buttons">
              ${!isCreator
                ? html`<a href="" id="apply-btn">Apply</a>`
                : nothing}
              ${isCreator
                ? html`<a href="/edit/${offert._id}" id="edit-btn">Edit</a>
                    <a
                      href="javascript:void(0)"
                      id="delete-btn"
                      @click="${(id) => onDelete(offert._id)}"
                      >Delete</a
                    >`
                : nothing}
            </div>`
          : nothing}
      </div>
    </div>
  </section>`;
};

export async function detailsPage(ctx) {
  let id = ctx.params.id;

  let offert = await getOffertById(id);

  ctx.render(detailsTemplate(offert, ctx.user, onDelete));
}

async function onDelete(id) {
  let result = confirm("Are you Sure!");

  if (result) {
    await deleteById(id);
    page.redirect("/dashboard");
  }
}
