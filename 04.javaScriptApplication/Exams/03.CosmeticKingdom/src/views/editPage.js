import { html } from "../../node_modules/lit-html/lit-html.js";
import { editProductById, getProductById } from "../api/data.js";

let editTemplate = (product, onSubmit) => html`<section id="edit">
  <div class="form">
    <h2>Edit Product</h2>
    <form class="edit-form" @submit="${onSubmit}">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Product Name"
        .value="${product.name}"
      />
      <input
        type="text"
        name="imageUrl"
        id="product-image"
        placeholder="Product Image"
        .value="${product.imageUrl}"
      />
      <input
        type="text"
        name="category"
        id="product-category"
        placeholder="Category"
        .value="${product.category}"
      />
      <textarea
        id="product-description"
        name="description"
        placeholder="Description"
        rows="5"
        cols="50"
        .value="${product.description}"
      ></textarea>

      <input
        type="text"
        name="price"
        id="product-price"
        placeholder="Price"
        .value="${product.price}"
      />
      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function editPage(ctx) {
  let id = ctx.params.id;

  let product = await getProductById(id);

  async function onSubmit(e) {
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);

    let name = formData.get("name");
    let imageUrl = formData.get("imageUrl");
    let category = formData.get("category");
    let description = formData.get("description");
    let price = formData.get("price");

    if (!name || !imageUrl || !category || !description || !price) {
      alert("All fields is required!");
      return;
    }

    await editProductById(id, name, imageUrl, category, description, price);
    ctx.page.redirect(`/details/${id}`);
  }

  ctx.render(editTemplate(product, onSubmit));
}
