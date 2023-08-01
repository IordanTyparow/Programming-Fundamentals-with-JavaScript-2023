import { html } from "../../node_modules/lit-html/lit-html.js";
import { edit, getPetById } from "../api/data.js";

let editTemplate = (pet, onSubmit) => html`<section id="editPage">
  <form class="editForm" @submit="${onSubmit}">
    <img src="${pet.image}" />
    <div>
      <h2>Edit PetPal</h2>
      <div class="name">
        <label for="name">Name:</label>
        <input name="name" id="name" type="text" .value="${pet.name}" />
      </div>
      <div class="breed">
        <label for="breed">Breed:</label>
        <input name="breed" id="breed" type="text" .value="${pet.breed}" />
      </div>
      <div class="Age">
        <label for="age">Age:</label>
        <input
          name="age"
          id="age"
          type="text"
          value="2 years"
          .value="${pet.age}"
        />
      </div>
      <div class="weight">
        <label for="weight">Weight:</label>
        <input
          name="weight"
          id="weight"
          type="text"
          value="5kg"
          .value="${pet.weight}"
        />
      </div>
      <div class="image">
        <label for="image">Image:</label>
        <input
          name="image"
          id="image"
          type="text"
          value="./image/dog.jpeg"
          .value="${pet.image}"
        />
      </div>
      <button class="btn" type="submit">Edit Pet</button>
    </div>
  </form>
</section>`;

export async function editPage(ctx) {
  let id = ctx.params.id;

  let pet = await getPetById(id);

  ctx.render(editTemplate(pet, onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    let formData = new FormData(e.target);

    let name = formData.get("name");
    let breed = formData.get("breed");
    let age = formData.get("age");
    let weight = formData.get("weight");
    let image = formData.get("image");

    if (!name || !breed || !age || !weight || !image) {
      return alert("All fields is Required!");
    }

    await edit(id, name, breed, age, weight, image);
    ctx.page.redirect("/details/" + id);
  }
}
