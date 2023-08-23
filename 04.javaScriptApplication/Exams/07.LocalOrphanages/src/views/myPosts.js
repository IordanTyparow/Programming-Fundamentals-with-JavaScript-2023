import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMyPosts } from "../api/data.js";

let myPostsTemplate = (allMyPosts) => html` <section id="my-posts-page">
  <h1 class="title">My Posts</h1>

  <!-- Display a div with information about every post (if any)-->
  <div class="my-posts">
    ${allMyPosts.length === 0
      ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>`
      : allMyPosts.map(
          (x) => html`<div class="post">
            <h2 class="post-title">${x.title}</h2>
            <img class="post-image" src="${x.imageUrl}" alt="Material Image" />
            <div class="btn-wrapper">
              <a href="/details/${x._id}" class="details-btn btn">Details</a>
            </div>
          </div> `
        )}
  </div>
</section>`;

export async function myPostsPage(ctx) {
  let userId = ctx.user._id;

  let allMyPosts = await getMyPosts(userId);

  ctx.render(myPostsTemplate(allMyPosts));
}
