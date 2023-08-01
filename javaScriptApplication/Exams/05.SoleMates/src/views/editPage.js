import { html } from "../../node_modules/lit-html/lit-html.js";
import { editShoe, getShoeById } from "../api/data.js";

let editTemplate = (shoe, onEdit) => html` <section id="edit">
  <div class="form">
    <h2>Edit item</h2>
    <form class="edit-form" @submit="${onEdit}">
      <input
        type="text"
        name="brand"
        id="shoe-brand"
        placeholder="Brand"
        .value="${shoe.brand}"
      />
      <input
        type="text"
        name="model"
        id="shoe-model"
        placeholder="Model"
        .value="${shoe.model}"
      />
      <input
        type="text"
        name="imageUrl"
        id="shoe-img"
        placeholder="Image url"
        .value="${shoe.imageUrl}"
      />
      <input
        type="text"
        name="release"
        id="shoe-release"
        placeholder="Release date"
        .value="${shoe.release}"
      />
      <input
        type="text"
        name="designer"
        id="shoe-designer"
        placeholder="Designer"
        .value="${shoe.designer}"
      />
      <input
        type="text"
        name="value"
        id="shoe-value"
        placeholder="Value"
        .value="${shoe.value}"
      />
      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function editPage(ctx) {
  let id = ctx.params.id;

  let shoe = await getShoeById(id);

  ctx.render(editTemplate(shoe, onEdit));

  async function onEdit(e) {
    e.preventDefault();

    let formData = new FormData(e.target);

    let brand = formData.get("brand");
    let model = formData.get("model");
    let imageUrl = formData.get("imageUrl");
    let release = formData.get("release");
    let designer = formData.get("designer");
    let value = formData.get("value");

    if (!brand || !model || !imageUrl || !release || !designer || !value) {
      alert("All fields is required!");
      return;
    }

    await editShoe(id, brand, model, imageUrl, release, designer, value);
    ctx.page.redirect(`/details/${id}`);
  }
}
