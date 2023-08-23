function attachEvents() {

    let phoneBook = document.getElementById('phonebook');
    let loadBtn = document.getElementById('btnLoad');
    let createBtn = document.getElementById('btnCreate');

    let getUrl = 'http://localhost:3030/jsonstore/phonebook';

    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');


    loadBtn.addEventListener('click', () => {
        fetch(getUrl)
            .then(ress => ress.json())
            .then(data => {
                for (const values of Object.values(data)) {
                    let createLiElement = document.createElement('li');
                    createLiElement.textContent = `${values.person}: ${values.phone}`;

                    let deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.addEventListener('click', (e) => {
                        let deleteUrl = `http://localhost:3030/jsonstore/phonebook/${values._id}`;
                        fetch(deleteUrl, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                        })
                            .then(ress => ress.json())
                            .then(person => console.log(person))

                        e.target.parentNode.remove();
                    });

                    createLiElement.appendChild(deleteBtn);
                    phoneBook.appendChild(createLiElement);
                }
            });
    });

    createBtn.addEventListener('click', () => {
        let postUrl = `http://localhost:3030/jsonstore/phonebook`;

        fetch(postUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                person: personInput.value,
                phone: phoneInput.value,
            })
        })
            .then(ress => ress.json())
            .then(data => {
                let createLiElement = document.createElement('li');
                createLiElement.textContent = `${data.person}: ${data.phone}`;

                let deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', (e) => {
                    let deleteUrl = `http://localhost:3030/jsonstore/phonebook/${data._id}`;
                    fetch(deleteUrl, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    })
                        .then(ress => ress.json())
                        .then(person => console.log(person))

                    e.target.parentNode.remove();
                });

                createLiElement.appendChild(deleteBtn);
                phoneBook.appendChild(createLiElement);

                personInput.value = '';
                phoneInput.value = '';
            });
    });
}

attachEvents();