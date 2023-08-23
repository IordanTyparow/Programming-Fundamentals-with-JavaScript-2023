import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteById, getMaterialById } from "../api/data.js";

let detailsTemplate = (material, user, onDelete) => html`
  <section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
      <div id="details">
        <div class="image-wrapper">
          <img
            src="${material.imageUrl}"
            alt="Material Image"
            class="post-image"
          />
        </div>
        <div class="info">
          <h2 class="title post-title">${material.title}</h2>
          <p class="post-description">Description: ${material.description}</p>
          <p class="post-address">Address: ${material.address}</p>
          <p class="post-number">Phone number: ${material.phone}</p>
          <p class="donate-Item">Donate Materials: 0</p>

          <!--Edit and Delete are only for creator-->
          <div class="btns">
            ${material._ownerId === user?._id
              ? html` <a href="/edit/${material._id}" class="edit-btn btn"
                    >Edit</a
                  >
                  <a
                    href="javascript:void(0)"
                    class="delete-btn btn"
                    @click="${(id) => onDelete(material._id)}"
                    >Delete</a
                  >`
              : nothing}
          </div>
        </div>
      </div>
    </div>
  </section>
`;

export async function detailsPage(ctx) {
  let id = ctx.params.id;

  let material = await getMaterialById(id);

  ctx.render(detailsTemplate(material, ctx.user, onDelete));

  async function onDelete(id) {
    let result = confirm("Are you Sure!");

    if (result) {
      await deleteById(id);
      ctx.page.redirect("/");
    }
  }
}
