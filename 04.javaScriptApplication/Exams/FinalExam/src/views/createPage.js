import { html } from "../../node_modules/lit-html/lit-html.js";
import { createFact } from "../api/data.js";

let createTemplate = (onCreate) => html`<section id="create">
  <div class="form">
    <h2>Add Fact</h2>
    <form class="create-form" @submit="${onCreate}">
      <input type="text" name="category" id="category" placeholder="Category" />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
      />
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="10"
        cols="50"
      ></textarea>
      <button type="submit">Add Fact</button>
    </form>
  </div>
</section>`;

export function createPage(ctx) {
  ctx.render(createTemplate(onCreate));

  async function onCreate(e) {
    e.preventDefault();

    let formData = new FormData(e.target);

    let category = formData.get("category");
    let imageUrl = formData.get("image-url");
    let description = formData.get("description");
    let info = formData.get("additional-info");

    if (!category || !imageUrl || !description || !info) {
      return alert("All fields is required!");
    }

    await createFact(category, imageUrl, description, info);
    ctx.page.redirect("/facts");
  }
}
