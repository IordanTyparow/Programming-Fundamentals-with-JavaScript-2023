import { html } from "../../node_modules/lit-html/lit-html.js";
import { getOffertById, updateOffertById } from "../api/data.js";

let editTemplate = (offert, onSubmit) => html`<section id="edit">
  <div class="form">
    <h2>Edit Offer</h2>
    <form class="edit-form" @submit="${onSubmit}">
      <input
        type="text"
        name="title"
        id="job-title"
        placeholder="Title"
        .value="${offert.title}"
      />
      <input
        type="text"
        name="imageUrl"
        id="job-logo"
        placeholder="Company logo url"
        .value="${offert.imageUrl}"
      />
      <input
        type="text"
        name="category"
        id="job-category"
        placeholder="Category"
        .value="${offert.category}"
      />
      <textarea
        id="job-description"
        name="description"
        placeholder="Description"
        rows="4"
        cols="50"
        .value="${offert.description}"
      ></textarea>
      <textarea
        id="job-requirements"
        name="requirements"
        placeholder="Requirements"
        rows="4"
        cols="50"
        .value="${offert.requirements}"
      ></textarea>
      <input
        type="text"
        name="salary"
        id="job-salary"
        placeholder="Salary"
        .value="${offert.salary}"
      />
      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function editPage(ctx) {
  let id = ctx.params.id;

  let offert = await getOffertById(id);

  ctx.render(editTemplate(offert, onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.target);

    let title = formData.get("title");
    let imageUrl = formData.get("imageUrl");
    let category = formData.get("category");
    let description = formData.get("description");
    let requirements = formData.get("requirements");
    let salary = formData.get("salary");

    if (
      !title ||
      !imageUrl ||
      !category ||
      !description ||
      !requirements ||
      !salary
    ) {
      alert("All fields is required!");
      return;
    }

    await updateOffertById(
      id,
      title,
      imageUrl,
      category,
      description,
      requirements,
      salary
    );
    ctx.page.redirect(`/details/${id}`);
  }
}
