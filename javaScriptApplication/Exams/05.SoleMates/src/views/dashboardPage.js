import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllShoes } from "../api/data.js";

let dashboardTemplate = (shoes) => html`<section id="dashboard">
  <h2>Collectibles</h2>
  <ul class="card-wrapper">
    ${shoes.length === 0
      ? html`<h2>There are no items added yet.</h2>`
      : shoes.map(
          (x) => html` <li class="card">
            <img src="${x.imageUrl}" alt="travis" />
            <p>
              <strong>Brand: </strong>
              <span class="brand">${x.brand}</span>
            </p>
            <p>
              <strong>Model: </strong>
              <span class="model">${x.model}</span>
            </p>
            <p>
              <strong>Value:</strong>
              <span class="value">${x.value}</span>$
            </p>
            <a class="details-btn" href="/details/${x._id}">Details</a>
          </li>`
        )}
  </ul>
</section>`;

export async function dashboardPage(ctx) {
  let shoes = await getAllShoes();

  ctx.render(dashboardTemplate(shoes));
}
