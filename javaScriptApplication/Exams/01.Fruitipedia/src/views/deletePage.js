import page from "../../node_modules/page/page.mjs";
import { deleteRequest } from "../api/user.js";

export function onDelete(ctx) {
    let id = ctx.params.id;
    
    deleteRequest(id);
    page.redirect('/fruits');
}