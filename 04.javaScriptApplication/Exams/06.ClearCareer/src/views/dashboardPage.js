import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllOffers } from "../api/data.js";

let dashboardTemplate = (offerts) => html`<section id="dashboard">
  <h2>Job Offers</h2>
  ${offerts.length === 0
    ? html`<h2>No offers yet.</h2>`
    : offerts.map(
        (x) => html`<div class="offer">
          <img src="${x.imageUrl}" alt="example1" />
          <p><strong>Title: </strong><span class="title">${x.title}</span></p>
          <p><strong>Salary:</strong><span class="salary">${x.salary}</span></p>
          <a class="details-btn" href="/details/${x._id}">Details</a>
        </div>`
      )}
</section>`;

export async function dashboardPage(ctx) {
  let offerts = await getAllOffers();

  ctx.render(dashboardTemplate(offerts));
}
