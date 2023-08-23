export function updateNav() {
    let user = JSON.parse(sessionStorage.getItem('user'));

    if (user) {
        document.querySelectorAll('.user').forEach(x => x.style.display = 'block');
        document.querySelectorAll('.guest').forEach(x => x.style.display = 'none');
    } else {
        document.querySelectorAll('.user').forEach(x => x.style.display = 'none');
        document.querySelectorAll('.guest').forEach(x => x.style.display = 'block');
    }
}