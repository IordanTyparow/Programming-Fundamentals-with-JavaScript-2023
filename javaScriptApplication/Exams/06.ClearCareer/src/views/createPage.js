import { html } from "../../node_modules/lit-html/lit-html.js";
import { createOffert } from "../api/data.js";

let createTemplate = (onCreate) => html`
  <section id="create">
    <div class="form">
      <h2>Create Offer</h2>
      <form class="create-form" @submit="${onCreate}">
        <input type="text" name="title" id="job-title" placeholder="Title" />
        <input
          type="text"
          name="imageUrl"
          id="job-logo"
          placeholder="Company logo url"
        />
        <input
          type="text"
          name="category"
          id="job-category"
          placeholder="Category"
        />
        <textarea
          id="job-description"
          name="description"
          placeholder="Description"
          rows="4"
          cols="50"
        ></textarea>
        <textarea
          id="job-requirements"
          name="requirements"
          placeholder="Requirements"
          rows="4"
          cols="50"
        ></textarea>
        <input type="text" name="salary" id="job-salary" placeholder="Salary" />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export function createPage(ctx) {
  ctx.render(createTemplate(onCreate));

  async function onCreate(e) {
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

    await createOffert(
      title,
      imageUrl,
      category,
      description,
      requirements,
      salary
    );
    ctx.page.redirect("/dashboard");
  }
}
