function loadPage() {

    let table = document.querySelector('table tbody');
    Array.from(table.children).forEach(x => x.remove());

    let submitBtn = document.querySelector('form button');
    submitBtn.addEventListener('click', onSubmit);


    let loadBtn = document.getElementById('loadBooks');
    loadBtn.addEventListener('click', onLoad);

    // Inplement loadBtn
    async function onLoad() {
        let response = await fetch('http://localhost:3030/jsonstore/collections/books')
        let data = await response.json();
        Array.from(table.children).forEach(x => x.remove());

        for (const [key, value] of Object.entries(data)) {
            let trElement = createElement('tr', '', '', { 'id': key });
            createElement('td', value.title, trElement, {});
            createElement('td', value.author, trElement, {});
            let secondTrElement = createElement('td', '', trElement, {});
            let editBtn = createElement('button', 'Edit', secondTrElement, {});
            editBtn.addEventListener('click', onEdit);
            let deleteBtn = createElement('button', 'Delete', secondTrElement, {});
            deleteBtn.addEventListener('click', onDelete);

            table.appendChild(trElement);
        }
    }

    async function onSubmit(e) {
        e.preventDefault();

        let form = document.querySelector('form');
        let formData = new FormData(form);

        let title = formData.get('title');
        let author = formData.get('author');

        if (!title || !author) {
            return;
        }

        await fetch('http://localhost:3030/jsonstore/collections/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                author,
            }),
        });

        Array.from(form.querySelectorAll('input')).forEach(x => x.value = '');

        await onLoad();
    }

    function onEdit(e) {

        submitBtn.style.display = 'none';
        
        let titleInput = e.target.parentNode.parentNode.children[0];
        let authorInput = e.target.parentNode.parentNode.children[1];

        let paragraph = document.querySelector('form h3');
        paragraph.textContent = 'Edit FORM';
        
        let valueForTitle = document.querySelector('form input[name="title"]');
        let valueForAuthor = document.querySelector('form input[name="author"]');

        valueForTitle.value = titleInput.textContent;
        valueForAuthor.value = authorInput.textContent;

        let saveBtn = document.createElement('button');
        saveBtn.id = e.target.parentNode.parentNode.id;
        saveBtn.textContent = 'Save';
        saveBtn.addEventListener('click', onSave);
        saveBtn.style.display = 'block';
        document.querySelector('form').appendChild(saveBtn);
    }
    
    async function onSave(e) {
        e.preventDefault();

        let currentId = e.target.id;
        let url = `http://localhost/jsonstore/collections/books/${currentId}`;

        let titleInput = e.target.parentNode.querySelector('input[name="title"]').value;
        let authorInput = e.target.parentNode.querySelector('input[name="author"]').value;

        await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: titleInput,
                author: authorInput,
            })
        });

        await onLoad();
    }

    async function onDelete(e) {
        let currentId = e.target.parentNode.parentNode.id;

        await fetch(`http://localhost:3030/jsonstore/collections/books/${currentId}`, {
            method: 'DELETE',
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

loadPage();