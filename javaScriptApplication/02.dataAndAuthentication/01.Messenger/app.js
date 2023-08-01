function attachEvents() {

    let url = `http://localhost:3030/jsonstore/messenger`;

    let sendBtn = document.getElementById('submit');
    let refreshBtn = document.getElementById('refresh');

    let nameInput = document.querySelectorAll('input[type="text"]')[0];
    let messageInput = document.querySelectorAll('input[type="text"]')[1];
    let textArea = document.getElementById('messages');


    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author: nameInput.value,
                content: messageInput.value,
            })
        });

        nameInput.value = '';
        messageInput.value = '';
    });

    let getUrl = `http://localhost:3030/jsonstore/messenger`;
    let resultText = [];

    refreshBtn.addEventListener('click', () => {
        resultText.length = 0;
        textArea.textContent = '';
        fetch(getUrl)
        .then(ress => ress.json())
        .then(data => {
            for (const values of Object.values(data)) {
                resultText.push(`${values.author}: ${values.content}`);
            }
            textArea.textContent = resultText.join('\n');
        });
    });
}

attachEvents();