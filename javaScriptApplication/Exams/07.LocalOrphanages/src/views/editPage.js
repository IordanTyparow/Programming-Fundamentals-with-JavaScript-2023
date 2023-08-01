import { html } from "../../node_modules/lit-html/lit-html.js";
import { editMaterialById, getMaterialById } from "../api/data.js";

let editTemplate = (material, onEdit) => html`<section
  id="edit-page"
  class="auth"
>
  <form id="edit" @submit="${onEdit}">
    <h1 class="title">Edit Post</h1>

    <article class="input-group">
      <label for="title">Post Title</label>
      <input type="title" name="title" id="title" .value="${material.title}" />
    </article>

    <article class="input-group">
      <label for="description">Description of the needs </label>
      <input
        type="text"
        name="description"
        id="description"
        .value="${material.description}"
      />
    </article>

    <article class="input-group">
      <label for="imageUrl"> Needed materials image </label>
      <input
        type="text"
        name="imageUrl"
        id="imageUrl"
        .value="${material.imageUrl}"
      />
    </article>

    <article class="input-group">
      <label for="address">Address of the orphanage</label>
      <input
        type="text"
        name="address"
        id="address"
        .value="${material.address}"
      />
    </article>

    <article class="input-group">
      <label for="phone">Phone number of orphanage employee</label>
      <input type="text" name="phone" id="phone" .value="${material.phone}" />
    </article>

    <input type="submit" class="btn submit" value="Edit Post" />
  </form>
</section>`;

export async function editPage(ctx) {
  let id = ctx.params.id;

  let material = await getMaterialById(id);

  ctx.render(editTemplate(material, onEdit));

  async function onEdit(e) {
    e.preventDefault();

    let formData = new FormData(e.target);

    let title = formData.get("title");
    let description = formData.get("description");
    let imageUrl = formData.get("imageUrl");
    let address = formData.get("address");
    let phone = formData.get("phone");

    if (!title || !description || !imageUrl || !address || !phone) {
      return alert("All fields is Required!");
    }

    await editMaterialById(id, title, description, imageUrl, address, phone);
    ctx.page.redirect(`/details/${id}`);
  }
}
