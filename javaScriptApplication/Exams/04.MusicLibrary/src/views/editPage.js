import { html } from "../../node_modules/lit-html/lit-html.js";
import { editAlbum, getAlbumById } from "../api/data.js";

let editTemplate = (album, onSubmit) => html` <section id="edit">
  <div class="form">
    <h2>Edit Album</h2>
    <form class="edit-form" @submit=${onSubmit}>
      <input
        type="text"
        name="singer"
        id="album-singer"
        placeholder="Singer/Band"
        .value="${album.singer}"
      />
      <input
        type="text"
        name="album"
        id="album-album"
        placeholder="Album"
        .value="${album.album}"
      />
      <input
        type="text"
        name="imageUrl"
        id="album-img"
        placeholder="Image url"
        .value="${album.imageUrl}"
      />
      <input
        type="text"
        name="release"
        id="album-release"
        placeholder="Release date"
        .value="${album.release}"
      />
      <input
        type="text"
        name="label"
        id="album-label"
        placeholder="Label"
        .value="${album.label}"
      />
      <input
        type="text"
        name="sales"
        id="album-sales"
        placeholder="Sales"
        .value="${album.sales}"
      />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export async function editPage(ctx) {
  let id = ctx.params.id;

  let album = await getAlbumById(id);

  async function onSubmit(e) {
    e.preventDefault();

    let form = e.target;
    let formData = new FormData(form);

    let singer = formData.get("singer");
    let album = formData.get("album");
    let imageUrl = formData.get("imageUrl");
    let release = formData.get("release");
    let label = formData.get("label");
    let sales = formData.get("sales");

    if (!singer || !album || !imageUrl || !release || !label || !sales) {
      alert("All field is require!");
      return;
    }

    await editAlbum(id, singer, album, imageUrl, release, label, sales);
    ctx.page.redirect(`/details/${id}`);
  }

  ctx.render(editTemplate(album, onSubmit));
}
