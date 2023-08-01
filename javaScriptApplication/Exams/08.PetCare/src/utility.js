export function getUserData() {
  let user = sessionStorage.getItem("user");

  if (user) {
    return JSON.parse(user);
  }

  return undefined;
}

export function setUserData(user) {
  sessionStorage.setItem("user", JSON.stringify(user));
}

export function clearUserData() {
  sessionStorage.removeItem("user");
}
