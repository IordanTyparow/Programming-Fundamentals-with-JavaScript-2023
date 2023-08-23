import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllEvents } from "../api/data.js";

let eventTemplate = (events) => html`
  <h2>Current Events</h2>
  <section id="dashboard">
    ${events.length > 0
      ? html`${events.map(
          (x) => html`
            <div class="event">
              <img src="${x.imageUrl}" alt="example1" />
              <p class="title">${x.name}</p>
              <p class="date">${x.date}</p>
              <a class="details-btn" href="/details/${x._id}">Details</a>
            </div>
          `
        )}`
      : html`<h4>No Events yet.</h4> `}
  </section>
`;

export async function eventsPage(ctx) {
  let events = await getAllEvents();

  ctx.render(eventTemplate(events));
}
