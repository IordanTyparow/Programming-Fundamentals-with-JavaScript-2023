import { html } from "../../node_modules/lit-html/lit-html.js";
import { createEvent } from "../api/data.js";

let addEventTemplate = (onSubmit) => html`
  <section id="create">
    <div class="form">
      <h2>Add Event</h2>
      <form class="create-form" @submit="${onSubmit}">
        <input type="text" name="name" id="name" placeholder="Event" />
        <input
          type="text"
          name="imageUrl"
          id="event-image"
          placeholder="Event Image URL"
        />
        <input
          type="text"
          name="category"
          id="event-category"
          placeholder="Category"
        />
        <textarea
          id="event-description"
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"
        ></textarea>
        <input type="text" name="date" id="date" placeholder="When?" />
        <button type="submit">Add</button>
      </form>
    </div>
  </section>
`;

export function addEvents(ctx) {
  ctx.render(addEventTemplate(onSubmit));

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

    await createEvent(name, imageUrl, category, description, date);
    ctx.page.redirect("/events");
  }
}
