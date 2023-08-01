import { html, nothing, render } from "../../node_modules/lit-html/lit-html.js";
import { querySearch } from "../api/data.js";
import { getUserData } from "../utility.js";

let searchTemplate = (onSearch) => html` <section id="search">
  <h2>Search by Brand</h2>

  <form class="search-wrapper cf" @submit="${onSearch}">
    <input
      id="#search-input"
      type="text"
      name="search"
      placeholder="Search here..."
      required
    />
    <button type="submit">Search</button>
  </form>

  <h3>Results:</h3>

  <div id="search-container">
    <ul class="card-wrapper"></ul>
  </div>
</section>`;

export function searchPage(ctx) {
  ctx.render(searchTemplate(onSearch, ctx.user));
}

async function onSearch(e) {
  e.preventDefault();

  let formData = new FormData(e.target);
  let searchInput = formData.get("search");

  if (!searchInput) {
    alert("The search field is required!");
    return;
  }

  let result = await querySearch(searchInput);

  let ul = document.querySelector(".card-wrapper");

  let template = (x, user) =>
    html` ${x.length === 0
      ? html`<h2>There are no results found.</h2>`
      : x.map(
          (x) => html` <li class="card">
            <img src="${x.imageUrl}" alt="travis" />
            <p><strong>Brand: </strong><span class="brand">${x.brand}</span></p>
            <p><strong>Model: </strong><span class="model">${x.model}</span></p>
            <p><strong>Value:</strong><span class="value">${x.value}</span>$</p>
            ${user
              ? html`<a class="details-btn" href="/details/${x._id}"
                  >Details</a
                >`
              : nothing}
          </li>`
        )}`;

  let user = getUserData();
  render(template(result, user), ul);
}
