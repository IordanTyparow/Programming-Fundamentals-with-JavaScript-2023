import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllProducts } from "../api/data.js";

let productsTemplate = (products) =>
  html`<h2>Products</h2>
    <section id="dashboard">
      ${products.length === 0
        ? html`<h2>No products yet.</h2>`
        : products.map(
            (x) => html`<div class="product">
              <img src="${x.imageUrl}" alt="example1" />
              <p class="title">${x.name}</p>
              <p>
                <strong>Price:</strong><span class="price">${x.price}</span>$
              </p>
              <a class="details-btn" href="/details/${x._id}">Details</a>
            </div>`
          )}
    </section>`;

export async function productsPage(ctx) {
  let products = await getAllProducts();

  ctx.render(productsTemplate(products));
}
