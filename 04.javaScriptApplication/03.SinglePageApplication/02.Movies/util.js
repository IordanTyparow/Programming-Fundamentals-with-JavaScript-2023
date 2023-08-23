function hiddenAll() {
    document.querySelectorAll('.view-section').forEach(x => x.style.display = 'none');
}

export function showView(section) {
    hiddenAll();
    section.style.display = 'block';
}

export function updateNav() {
    let user = JSON.parse(sessionStorage.getItem('user'));

    if (user) {
        document.querySelectorAll('.user').forEach(x => x.style.display = 'inline-block');
        document.querySelectorAll('.guest').forEach(x => x.style.display = 'none');
        document.getElementById('welcome-msg').textContent = `Welcome, ${user.email}`;
    } else {
        document.querySelectorAll('.user').forEach(x => x.style.display = 'none');
        document.querySelectorAll('.guest').forEach(x => x.style.display = 'inline-block');
    }
}