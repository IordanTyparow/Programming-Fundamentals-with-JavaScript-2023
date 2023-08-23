export function addSession(ctx, next) {
  let user = JSON.parse(sessionStorage.getItem("user"));

  ctx.user = user;
  next();
}
