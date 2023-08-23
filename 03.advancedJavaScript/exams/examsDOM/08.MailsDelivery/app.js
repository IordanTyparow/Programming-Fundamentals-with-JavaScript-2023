function solve() {
    let recipientNameElement = document.getElementById('recipientName');
    let titleElement = document.getElementById('title');
    let messageElement = document.getElementById('message');

    let listSection = document.getElementById('list');
    let sendListElement = document.querySelector('.sent-list');
    let trashElement = document.querySelector('.delete-list');

    let addBtnElement = document.getElementById('add');
    let resetBtnElement = document.getElementById('reset');

    addBtnElement.addEventListener('click', (e) => {
        e.preventDefault();
        if (recipientNameElement.value === '' || titleElement.value === '' || messageElement.value === '') {
            return;
        }

        let createLiElement = document.createElement('li');

        let title = document.createElement('h4');
        title.textContent = `Title: ${titleElement.value}`;

        let recipientName = document.createElement('h4');
        recipientName.textContent = `Recipient Name: ${recipientNameElement.value}`;

        let message = document.createElement('span');
        message.textContent = `${messageElement.value}`;

        let divElement = document.createElement('div');
        divElement.setAttribute('id', 'list-action');

        let sendBtn = document.createElement('button');
        sendBtn.setAttribute('type', 'submit');
        sendBtn.setAttribute('id', 'send');
        sendBtn.textContent = 'Send';

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.setAttribute('id', 'delete');
        deleteBtn.textContent = 'Delete';

        divElement.appendChild(sendBtn);
        divElement.appendChild(deleteBtn);

        createLiElement.appendChild(title);
        createLiElement.appendChild(recipientName);
        createLiElement.appendChild(message);

        createLiElement.appendChild(divElement);
        listSection.appendChild(createLiElement);

        let savedRecipientName = recipientNameElement.value;
        let savedTitle = titleElement.value;
        let savedMessage = message.value;

        recipientNameElement.value = '';
        titleElement.value = '';
        messageElement.value = '';

        sendBtn.addEventListener('click', (e) => {
            let liElementSended = document.createElement('li');

            let recipientNameS = document.createElement('span');
            recipientNameS.textContent = `To: ${savedRecipientName}`;

            let titleS = document.createElement('span');
            titleS.textContent = `Title: ${savedTitle}`;

            let div = document.createElement('div');
            div.setAttribute('class', 'btn');

            let deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('type', 'submit');
            deleteBtn.setAttribute('class', 'delete');
            deleteBtn.textContent = 'Delete';

            div.appendChild(deleteBtn);

            liElementSended.appendChild(recipientNameS);
            liElementSended.appendChild(titleS);
            liElementSended.appendChild(div);

            sendListElement.appendChild(liElementSended);

            deleteBtn.addEventListener('click', () => {
                let liElement = document.createElement('li');

                let to = document.createElement('span');
                to.textContent = `To: ${savedRecipientName}`;

                let title = document.createElement('span');
                title.textContent = `Title: ${savedRecipientName}`;

                liElement.appendChild(to);
                liElement.appendChild(title);

                trashElement.appendChild(liElement);

                liElementSended.remove();
            });

            createLiElement.remove();
        });

        deleteBtn.addEventListener('click', () => {
            let liElement = document.createElement('li');

            let to = document.createElement('span');
            to.textContent = `To: ${savedRecipientName}`;

            let title = document.createElement('span');
            title.textContent = `Title: ${savedRecipientName}`;

            liElement.appendChild(to);
            liElement.appendChild(title);

            trashElement.appendChild(liElement);

            createLiElement.remove();
        });
    });

    resetBtnElement.addEventListener('click', (e) => {
        e.preventDefault();

        recipientNameElement.value = '';
        titleElement.value = '';
        messageElement.value = '';
    });
}
solve()