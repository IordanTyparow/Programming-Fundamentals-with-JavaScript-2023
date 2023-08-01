import { html } from "../../node_modules/lit-html/lit-html.js";
import { getEventById, updateEvent } from "../api/data.js";

let editTemplate = (data, onSubmit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Event</h2>
      <form class="edit-form" @submit="${onSubmit}">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Event"
          .value="${data.name}"
        />
        <input
          type="text"
          name="imageUrl"
          id="event-image"
          placeholder="Event Image"
          .value="${data.imageUrl}"
        />
        <input
          type="text"
          name="category"
          id="event-category"
          placeholder="Category"
          .value="${data.category}"
        />
        <textarea
          id="event-description"
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
          .value="${data.description}"
        ></textarea>
        <label for="date-and-time">Event Time:</label>
        <input
          type="text"
          name="date"
          id="date"
          placeholder="When?"
          .value="${data.date}"
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  </section>
`;

export async function editPage(ctx) {
  let id = ctx.params.id;

  let data = await getEventById(id);

  async function onSubmit(e) {
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);

    let name = formData.get("name");
    let imageUrl = formData.get("imageUrl");
    let category = formData.get("category");
    let description = formData.get("description");
    let date = formData.get("date");

    if (!name || !imageUrl || !category || !description || !date) {
      return;
    }

    await updateEvent(id, name, imageUrl, category, description, date);
    ctx.page.redirect("/events");
  }

  ctx.render(editTemplate(data, onSubmit));
}
