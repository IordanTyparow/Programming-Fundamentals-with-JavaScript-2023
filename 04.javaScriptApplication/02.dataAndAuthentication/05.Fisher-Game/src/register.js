console.log('TODO:// Implement Register functionality');

document.getElementById('logout').style.display = 'none';
document.querySelector('button').addEventListener('click', register);

async function register(e) {
    e.preventDefault();

    let form = document.querySelector('form');
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');
    let rePass = formData.get('rePass');

    if (!email) {
        document.querySelector('.notification').textContent = 'Email is required';
    } else if (!password) {
        document.querySelector('.notification').textContent = 'Password is required';
    } else if (!rePass) {
        document.querySelector('.notification').textContent = 'rePass is required';
    } else if (password !== rePass) {
        document.querySelector('.notification').textContent = 'Passwords is not Same!';
    }

    if (email && password && rePass) {
        try {
            let response = await fetch(`http://localhost:3030/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                })
            });

            if (!response.ok) {
                let error = new Error(response.statusText);
                throw error;
            }

            let data = await response.json();

            sessionStorage.setItem('user', email);
            sessionStorage.setItem('accessToken', data.accessToken);
            sessionStorage.setItem('id', data._id);

            window.location = 'index.html';
        } catch (err) {
            document.querySelector('.notification').textContent = err.message;
        }
    }
}

register();