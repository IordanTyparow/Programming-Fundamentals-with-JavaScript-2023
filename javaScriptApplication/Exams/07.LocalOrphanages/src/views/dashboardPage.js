import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllMaterials } from "../api/data.js";

let dashboardTemplate = (materials) => html`<section id="dashboard-page">
  <h1 class="title">All Posts</h1>

  <div class="all-posts">
    ${materials.length === 0
      ? html`<h1 class="title no-posts-title">No posts yet!</h1>`
      : materials.map(
          (x) => html`<div class="post">
            <h2 class="post-title">${x.title}</h2>
            <img class="post-image" src="${x.imageUrl}" alt="Kids clothes" />
            <div class="btn-wrapper">
              <a href="/details/${x._id}" class="details-btn btn"> Details </a>
            </div>
          </div>`
        )}
  </div>
</section> `;

export async function dashboardPage(ctx) {
  let materials = await getAllMaterials();

  ctx.render(dashboardTemplate(materials));
}
