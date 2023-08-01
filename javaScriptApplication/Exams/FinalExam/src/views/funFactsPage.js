import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllFacts } from "../api/data.js";

let funFactsTemplate = (facts) => html`<h2>Fun Facts</h2>
  <section id="dashboard">
    ${facts.length === 0
      ? html`<h2>No Fun Facts yet.</h2>`
      : facts.map(
          (x) => html`<div class="fact">
            <img src="${x.imageUrl}" alt="example1" />
            <h3 class="category">${x.category}</h3>
            <p class="description">${x.description}</p>
            <a class="details-btn" href="/details/${x._id}">More Info</a>
          </div>`
        )}
  </section>`;

export async function funFactsPage(ctx) {
  let facts = await getAllFacts();

  ctx.render(funFactsTemplate(facts));
}
