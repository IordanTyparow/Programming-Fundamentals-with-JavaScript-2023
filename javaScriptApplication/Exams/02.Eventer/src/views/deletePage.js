import { deleteEvent } from "../api/data.js";

export async function onDelete(ctx) {
  let id = ctx.params.id;

  await deleteEvent(id);

  ctx.page.redirect("/");
}
