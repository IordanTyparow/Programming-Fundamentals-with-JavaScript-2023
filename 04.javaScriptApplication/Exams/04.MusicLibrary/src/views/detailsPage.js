import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import {
  currentUserLikes,
  deleteAlbum,
  getAlbumById,
  getLikes,
  likeRequest,
} from "../api/data.js";
import page from "../../node_modules/page/page.mjs";

let detailsTemplate = (album, user, onDelete, likeMusic, likes, isLiked) => {
  let isCreator = album._ownerId === user?._id;

  return html`
    <section id="details">
      <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
          <img src="${album.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
          <p>
            <strong>Band:</strong
            ><span id="details-singer">${album.singer}</span>
          </p>
          <p>
            <strong>Album name:</strong
            ><span id="details-album">${album.album}</span>
          </p>
          <p>
            <strong>Release date:</strong
            ><span id="details-release">${album.release}</span>
          </p>
          <p>
            <strong>Label:</strong
            ><span id="details-label">${album.label}</span>
          </p>
          <p>
            <strong>Sales:</strong
            ><span id="details-sales">${album.sales}</span>
          </p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${likes}</span></div>

        <div id="action-buttons">
          ${user ? html`<div id="action-buttons">
                ${!isCreator && !isLiked
                  ? html`<a href="" id="like-btn" @click="${likeMusic}"
                      >Like</a
                    >`
                  : nothing}
                ${isCreator
                  ? html`<a href="/edit/${album._id}" id="edit-btn">Edit</a
                      ><a
                        href="javascript:void(0)"
                        id="edit-btn"
                        @click="${(id) => onDelete(album._id)}"
                        >Delete</a
                      >`
                  : nothing}
              </div>`
            : nothing}
        </div>
      </div>
    </section>
  `;
};

export async function detailsPage(ctx) {
  let id = ctx.params.id;

  let album = await getAlbumById(id);

  let likes = await getLikes(id);

  let isLiked = false;

  if (ctx.user) {
    isLiked = !!(await currentUserLikes(id, ctx.user._id));
  }

  ctx.render(
    detailsTemplate(album, ctx.user, onDelete, likeMusic, likes, isLiked)
  );

  async function likeMusic() {
    await likeRequest(id);
    ctx.page.redirect("/details/" + id);
  }
}

async function onDelete(id) {
  let result = confirm("Are you Sure!");

  if (result) {
    await deleteAlbum(id);
    page.redirect("/dashboard");
  }
}
