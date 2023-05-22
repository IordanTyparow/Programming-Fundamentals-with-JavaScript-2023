window.addEventListener('load', solve);

function solve() {

    let firstNameInput = document.getElementById('first-name');
    let lastNameInput = document.getElementById('last-name');
    let numberOfPeopleCountInput = document.getElementById('people-count');
    let formDateInput = document.getElementById('from-date');
    let daysCountInput = document.getElementById('days-count');

    let mainElement = document.querySelector('#main');
    let bodyElement = document.querySelector('body');
    let infoTicket = document.querySelector('.ticket-info-list');
    let confirmListElements = document.querySelector('.confirm-ticket');

    //First Step
    let buttonNextStep = document.getElementById('next-btn');
    buttonNextStep.addEventListener('click', nextStep)
    function nextStep(e) {
        e.preventDefault();

        if (firstNameInput.value == '' || lastNameInput.value == ''
            || numberOfPeopleCountInput.value == ''
            || formDateInput.value == '' || daysCountInput.value == '') {
            return;
        }

        let createLiElement = document.createElement('li');
        createLiElement.setAttribute('class', 'ticket');

        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`;
        article.appendChild(h3);

        let p1 = document.createElement('p');
        p1.textContent = `Form date: ${formDateInput.value}`;
        article.appendChild(p1);

        let p2 = document.createElement('p');
        p2.textContent = `For ${daysCountInput.value} days`;
        article.appendChild(p2);

        let p3 = document.createElement('p');
        p3.textContent = `For ${numberOfPeopleCountInput.value} people`;
        article.appendChild(p3);

        createLiElement.appendChild(article);

        let button1 = document.createElement('button');
        button1.setAttribute('class', 'edit-btn');
        button1.textContent = 'Edit';

        let button2 = document.createElement('button');
        button2.setAttribute('class', 'continue-btn');
        button2.textContent = 'Continue';

        createLiElement.appendChild(button1);
        createLiElement.appendChild(button2);

        infoTicket.appendChild(createLiElement);

        buttonNextStep.disabled = true;

        let editFirstName = firstNameInput.value;
        let editLastName = lastNameInput.value;
        let editNumberOfPeopleCountInput = numberOfPeopleCountInput.value;
        let editFromDate = formDateInput.value;
        let editDaysCountInput = daysCountInput.value;

        firstNameInput.value = '';
        lastNameInput.value = '';
        numberOfPeopleCountInput.value = '';
        formDateInput.value = '';
        daysCountInput.value = '';

        //Second Step
        button1.addEventListener('click', edit)
        function edit() {
            firstNameInput.value = editFirstName;
            lastNameInput.value = editLastName;
            numberOfPeopleCountInput.value = editNumberOfPeopleCountInput;
            formDateInput.value = editFromDate;
            daysCountInput.value = editDaysCountInput

            createLiElement.remove();

            buttonNextStep.disabled = false;
        }

        // Third Step
        button2.addEventListener('click', continues);
        function continues() {
            let liElement = document.createElement('li');
            liElement.setAttribute('class', 'ticket-content');

            let confirmTicketArticle = document.createElement('article');
            confirmTicketArticle = article

            let confirmButton = document.createElement('button');
            confirmButton.setAttribute('class', 'confirm-btn');
            confirmButton.textContent = 'Confirm';

            let cancelButton = document.createElement('button');
            cancelButton.setAttribute('class', 'cancel-btn');
            cancelButton.textContent = 'Cancel';

            liElement.appendChild(confirmTicketArticle);
            liElement.appendChild(confirmButton);
            liElement.appendChild(cancelButton);
            createLiElement.remove();

            confirmListElements.appendChild(liElement);

            confirmButton.addEventListener('click', confirmBtn);
            function confirmBtn() {
                mainElement.remove();
                let thanksElement = document.createElement('h1');
                thanksElement.setAttribute('id', 'thank-you');
                thanksElement.textContent = 'Thank you, have a nice day!';
                let backBtn = document.createElement('button');
                backBtn.setAttribute('id', 'back-btn');
                backBtn.textContent = 'Back';
                bodyElement.appendChild(thanksElement);
                bodyElement.appendChild(backBtn);
                backBtn.addEventListener('click', onBack)
                function onBack() {
                    location.reload();
                }
            }

            cancelButton.addEventListener('click', remove);
            function remove() {
                confirmListElements.remove();
                buttonNextStep.disabled = false;
            }
        }
    }
}



