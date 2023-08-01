import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import {
  currentUserLike,
  deleteById,
  getFactById,
  like,
  ownLikes,
} from "../api/data.js";

let detailsTemplate = (
  fact,
  user,
  onDelete,
  onLike,
  ownLike,
  isLiked
) => html` <section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="${fact.imageUrl}" alt="example1" />
    <p id="details-category">${fact.category}</p>
    <div id="info-wrapper">
      <div id="details-description">
        <p id="description">${fact.description}</p>
        <p id="more-info">${fact.moreInfo}</p>
      </div>

      <h3>Likes:<span id="likes">${ownLike}</span></h3>

      ${user
        ? html`<div id="action-buttons">
            ${fact._ownerId === user?._id
              ? html` <a href="/edit/${fact._id}" id="edit-btn">Edit</a>
                  <a
                    href="javascript:void(0)"
                    id="delete-btn"
                    @click="${onDelete}"
                    >Delete</a
                  >`
              : nothing}
            ${isLiked === 0 && fact._ownerId !== user?._id
              ? html`<a
                  href="javascript:void(0)"
                  id="like-btn"
                  @click="${onLike}"
                  >Like</a
                >`
              : nothing}
          </div>`
        : nothing}
    </div>
  </div>
</section>`;

export async function detailsPage(ctx) {
  let id = ctx.params.id;

  let fact = await getFactById(id);

  let ownLike = await ownLikes(encodeURIComponent(id));

  let isLiked = 0;

  if (ctx.user) {
    isLiked = await currentUserLike(id, ctx.user._id);
  }

  ctx.render(
    detailsTemplate(fact, ctx.user, onDelete, onLike, ownLike, isLiked)
  );

  async function onLike() {
    await like(id);
    ctx.page.redirect(`/details/${id}`);
  }

  async function onDelete() {
    let result = confirm("Are you Sure!");

    if (result) {
      await deleteById(id);
      ctx.page.redirect("/facts");
    }
  }
}
