import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";
import { deleteProduct, getProductById } from "../api/data.js";

let detailsTemplate = (product, user, onDelete) =>
  html`
    <section id="details">
      <div id="details-wrapper">
        <img id="details-img" src="${product.imageUrl}" alt="example1" />
        <p id="details-title">${product.name}</p>
        <p id="details-category">
          Category: <span id="categories">${product.category}</span>
        </p>
        <p id="details-price">
          Price: <span id="price-number">${product.price}</span>$
        </p>
        <div id="info-wrapper">
          <div id="details-description">
            <h4>Bought: <span id="buys">0</span> times.</h4>
            <span>${product.description}</span>
          </div>
        </div>

        ${product._ownerId === user?._id
          ? html`<div id="action-buttons">
              <a href="/edit/${product._id}" id="edit-btn">Edit</a>
              <a
                href="javascript:void(0)"
                id="delete-btn"
                @click="${(id) => onDelete(product._id)}"
                >Delete</a
              >
            </div>`
          : nothing}
      </div>
    </section>
  `;

export async function detailsPage(ctx) {
  let id = ctx.params.id;

  let product = await getProductById(id);

  ctx.render(detailsTemplate(product, ctx.user, onDelete));
}

async function onDelete(productId) {
  let result = confirm("Are you sure to Delete this Product");

  if (result) {
    await deleteProduct(productId);
    page.redirect("/products");
  }
}

// Bonus - Only for logged-in users ( not authors )
// <a href="" id="buy-btn">Buy</a>
