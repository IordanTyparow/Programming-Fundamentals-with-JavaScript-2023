import { html } from "../../node_modules/lit-html/lit-html.js";
import { editById, getFactById } from "../api/data.js";

let editTemplate = (fact, onSubmit) => html`<section id="edit">
  <div class="form">
    <h2>Edit Fact</h2>
    <form class="edit-form" @submit="${onSubmit}">
      <input
        type="text"
        name="category"
        id="category"
        placeholder="Category"
        .value="${fact.category}"
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value="${fact.imageUrl}"
      />
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
        .value="${fact.description}"
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="10"
        cols="50"
        .value="${fact.moreInfo}"
      ></textarea>
      <button type="submit">Post</button>
    </form>
  </div>
</section>`;

export async function editPage(ctx) {
  let id = ctx.params.id;

  let fact = await getFactById(id);

  ctx.render(editTemplate(fact, onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.target);

    let category = formData.get("category");
    let imageUrl = formData.get("image-url");
    let description = formData.get("description");
    let info = formData.get("additional-info");

    if (!category || !imageUrl || !description || !info) {
      return alert("All fields is required!");
    }

    await editById(id, category, imageUrl, description, info);
    ctx.page.redirect(`/details/${id}`);
  }
}
