import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { deleteCard, getPetById } from "../api/data.js";

let detailsTemplate = (pet, user, onDelete) => html` <section id="detailsPage">
  <div class="details">
    <div class="animalPic">
      <img src="${pet.image}" />
    </div>
    <div>
      <div class="animalInfo">
        <h1>Name: ${pet.name}</h1>
        <h3>Breed: ${pet.breed}</h3>
        <h4>Age: ${pet.age}</h4>
        <h4>Weight: ${pet.weight}</h4>
        <h4 class="donation">Donation: 0$</h4>
      </div>

      ${user
        ? html` <div class="actionBtn">
            ${pet._ownerId === user._id
              ? html`<a href="/edit/${pet._id}" class="edit">Edit</a>
                  <a
                    href="javascript:void(0)"
                    class="remove"
                    @click="${onDelete}"
                    >Delete</a
                  >`
              : html`<a href="#" class="donate">Donate</a>`}
          </div>`
        : nothing}
    </div>
  </div>
</section>`;

export async function detailsPage(ctx) {
  let id = ctx.params.id;

  let pet = await getPetById(id);

  ctx.render(detailsTemplate(pet, ctx.user, onDelete));

  async function onDelete() {
    let result = confirm("Are you Sure");

    if (result) {
      await deleteCard(id);
      ctx.page.redirect("/");
    }
  }
}
