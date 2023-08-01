console.log('TODO:// Implement Home functionality');

function homePage() {
    let catches = document.querySelector('#catches');
    let accessToken = sessionStorage.getItem('accessToken');
    let user = sessionStorage.getItem('user');

    let addBtn = document.querySelector('.add');
    addBtn.addEventListener('click', onAdd);

    if (user) {
        document.querySelector('span').textContent = user;
        document.querySelector('.add').disabled = false;
    } else {
        document.querySelector('span').textContent = 'guest';
        document.querySelector('.add').disabled = true;
    }

    if (accessToken) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
    } else {
        document.getElementById('login').style.display = 'block';
        document.getElementById('register').style.display = 'block';
        document.getElementById('logout').style.display = 'none';
    }

    let logoutBtn = document.getElementById('logout');
    logoutBtn.addEventListener('click', onLogout);

    async function onLogout(e) {
        await fetch('http://localhost:3030/users/logout', {
            method: 'GET',
            headers: {
                'X-Authorization': accessToken,
            }
        });

        sessionStorage.removeItem('user');
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('id');

        window.location = 'index.html';

    }

    Array.from(catches.children).forEach(x => x.remove());
    let loadBtn = document.querySelector('.load');
    loadBtn.addEventListener('click', onLoad);

    async function onLoad(e) {
        Array.from(catches.children).forEach(x => x.remove());

        let response = await fetch('http://localhost:3030/data/catches');
        let data = await response.json();

        for (const catche of Object.values(data)) {
            let divElement = createElement('div', '', '', { 'class': 'catch' });

            createElement('label', 'Angler', divElement, {});
            createElement('input', '', divElement, { 'type': 'text', 'class': 'angler', 'value': catche.angler });
            createElement('label', 'Weight', divElement, {});
            createElement('input', '', divElement, { 'type': 'text', 'class': 'weight', 'value': catche.weight });
            createElement('label', 'Species', divElement, {});
            createElement('input', '', divElement, { 'type': 'text', 'class': 'species', 'value': catche.species });
            createElement('label', 'Location', divElement, {});
            createElement('input', '', divElement, { 'type': 'text', 'class': 'location', 'value': catche.location });
            createElement('label', 'Bait', divElement, {});
            createElement('input', '', divElement, { 'type': 'text', 'class': 'bait', 'value': catche.bait });
            createElement('label', 'CaptureTime', divElement, {});
            createElement('input', '', divElement, { 'type': 'text', 'class': 'captureTime', 'value': catche.captureTime });
            let updateBtn = createElement('button', 'Update', divElement, { 'class': 'update', 'data-id': catche._id });
            updateBtn.addEventListener('click', onUpdate);
            let deleteBtn = createElement('button', 'Delete', divElement, { 'class': 'delete', 'data-id': catche._id });
            deleteBtn.addEventListener('click', onDelete);

            let currentUser = sessionStorage.getItem('id');

            if (currentUser !== catche._ownerId) {
                Array.from(divElement.children).forEach(x => x.disabled = true);
            }

            catches.appendChild(divElement)
        }
    }

    async function onAdd(event) {
        event.preventDefault();

        let form = document.getElementById('addForm');
        let formData = new FormData(form);

        let angler = formData.get('angler');
        let weight = formData.get('weight');
        let species = formData.get('species');
        let location = formData.get('location');
        let bait = formData.get('bait');
        let captureTime = formData.get('captureTime');

        if (!angler || !weight || !species || !location || !bait || !captureTime) {
            alert('Input fields is Required!');
        }

        if (angler && weight && species && location && bait && captureTime) {
            try {
                let response = await fetch('http://localhost:3030/data/catches', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Authorization': accessToken,
                    },
                    body: JSON.stringify({
                        angler,
                        weight,
                        species,
                        location,
                        bait,
                        captureTime,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`${response.statusText}`);
                }

                Array.from(form.querySelectorAll('input')).forEach(x => x.value = '');

                await onLoad();
            } catch (error) {
                alert(error.message);
            }
        }
    }

    async function onUpdate(e) {
        let currentId = e.target.dataset.id;
        let currentFields = e.target.parentNode;

        let angler = currentFields.getElementsByClassName('angler')[0].value;
        let weight = currentFields.getElementsByClassName('weight')[0].value;
        let species = currentFields.getElementsByClassName('species')[0].value;
        let location = currentFields.getElementsByClassName('location')[0].value;
        let bait = currentFields.getElementsByClassName('bait')[0].value;
        let captureTime = currentFields.getElementsByClassName('captureTime')[0].value;

        try {
            let response = await fetch(`http://localhost:3030/data/catches/${currentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': accessToken,
                },
                body: JSON.stringify({
                    angler,
                    weight,
                    species,
                    location,
                    bait,
                    captureTime,
                }),
            })

            if (!response.ok) {
                throw new Error('Something Wrong');
            }

            await onLoad();
        } catch (error) {
            alert(error.message);
        }

    }

    async function onDelete(e) {
        let currentId = e.target.dataset.id;

        await fetch(`http://localhost:3030/data/catches/${currentId}`, {
            method: 'DELETE',
            headers: {
                'X-Authorization': accessToken,
            }
        });

        await onLoad();
    }

    function createElement(type, content, parent, attributes) {
        const element = document.createElement(type);
        element.textContent = content;

        if (parent) {
            parent.appendChild(element);
        }

        for (const [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value);
        }

        return element;
    }
}

homePage();