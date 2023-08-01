import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteShoeById, getShoeById } from "../api/data.js";

let detailsTemplate = (shoe, user, onDelete) => html`<section id="details">
  <div id="details-wrapper">
    <p id="details-title">Shoe Details</p>
    <div id="img-wrapper">
      <img src="${shoe.imageUrl}" alt="example1" />
    </div>
    <div id="info-wrapper">
      <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
      <p>Model: <span id="details-model">${shoe.model}</span></p>
      <p>Release date: <span id="details-release">${shoe.release}</span></p>
      <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
      <p>Value: <span id="details-value">${shoe.value}</span></p>
    </div>

    <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
      ${shoe._ownerId === user._id
        ? html`<a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
            <a
              href="javascript:void(0)"
              id="delete-btn"
              @click="${(id) => onDelete(shoe._id)}"
              >Delete</a
            >`
        : nothing}
    </div>
  </div>
</section>`;

export async function detailsPage(ctx) {
  let id = ctx.params.id;

  let shoe = await getShoeById(id);

  ctx.render(detailsTemplate(shoe, ctx.user, onDelete));

  async function onDelete(id) {
    let result = confirm("Are you Sure!");

    if (result) {
      await deleteShoeById(id);
      ctx.page.redirect("/dashboard");
    }

    return;
  }
}
