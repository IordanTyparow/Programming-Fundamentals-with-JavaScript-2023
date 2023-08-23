import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllAlbums } from "../api/data.js";

let dashboardTemplate = (albums) => html`<section id="dashboard">
  <h2>Albums</h2>
  <ul class="card-wrapper">
    ${albums.length == 0
      ? html`<h2>There are no albums added yet.</h2>`
      : albums.map(
          (x) => html` <li class="card">
              <img src="${x.imageUrl}" alt="travis" />
              <p>
                <strong>Singer/Band: </strong>
                <span class="singer">${x.singer}</span>
              </p>
              <p>
                <strong>Album name: </strong>
                <span class="album">${x.album}</span>
              </p>
              <p>
                <strong>Sales:</strong>
                <span class="sales">${x.sales}</span>
              </p>
              <a class="details-btn" href="/details/${x._id}">Details</a>
            </li>
            ;`
        )}
  </ul>
</section> `;

export async function dashboardPage(ctx) {
  let albums = await getAllAlbums();

  ctx.render(dashboardTemplate(albums));
}
