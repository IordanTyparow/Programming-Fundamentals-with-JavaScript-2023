console.log('TODO:// Implement Login functionality');

function login() {
    let accessToken = sessionStorage.getItem('accessToken');

    if (accessToken) {
        document.getElementById('logout').style.display = 'block';
    } else {
        document.getElementById('logout').style.display = 'none';
    }

    let buttonElement = document.querySelector('button');
    buttonElement.addEventListener('click', onLogin);

    async function onLogin(e) {
        e.preventDefault();
        let form = document.querySelector('form');
        let formData = new FormData(form);

        let email = formData.get('email');
        let password = formData.get('password');

        if (!email) {
            document.querySelector('.notification').textContent = 'Email is required';
        } else if (!password) {
            document.querySelector('.notification').textContent = 'Password is required';
        }

        if (email && password) {
            try {
                let response = await fetch(`http://localhost:3030/users/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                if (!response.ok) {
                    let error = new Error(response.statusText);
                    throw error;
                }

                let data = await response.json();

                sessionStorage.setItem('accessToken', data.accessToken);
                sessionStorage.setItem('user', data.email);
                sessionStorage.setItem('id', data._id);

                window.location = 'index.html';
            } catch (error) {
                document.querySelector('.notification').textContent = error.message;
            }
        }
    }
}

login();