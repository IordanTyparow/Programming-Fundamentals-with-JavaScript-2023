window.addEventListener('load', solve);

function solve() {

    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let dateIn = document.getElementById('date-in');
    let dateOut = document.getElementById('date-out');
    let peopleCount = document.getElementById('people-count');
    
    let reservationList = document.querySelector('.info-list');
    let confirmList = document.querySelector('.confirm-list');
    let success = document.getElementById('verification');

    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', makeReservation);
    function makeReservation(e) {
        e.preventDefault();
        if (firstName.value == '' 
        || lastName.value == '' 
        || dateIn.value == ''
        || dateOut.value == ''
        || peopleCount.value == ''
        || new Date(dateIn.value) >= new Date(dateOut.value)) {
            return;
        }   

        let createListItem = document.createElement('li');
        createListItem.setAttribute('class', 'reservation-content');

        let article = document.createElement('article');

        let name = document.createElement('h3');
        name.textContent = `Name: ${firstName.value} ${lastName.value}`;

        let dateInParagraph = document.createElement('p');
        dateInParagraph.textContent = `From date: ${dateIn.value}`;

        let dateOutParagraph = document.createElement('p');
        dateOutParagraph.textContent = `To date: ${dateOut.value}`;

        let peopleParagraph = document.createElement('p');
        peopleParagraph.textContent = `For ${peopleCount.value} people`;

        article.appendChild(name);
        article.appendChild(dateInParagraph);
        article.appendChild(dateOutParagraph);
        article.appendChild(peopleParagraph);

        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';

        let continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';

        createListItem.appendChild(article);
        createListItem.appendChild(editBtn);
        createListItem.appendChild(continueBtn);

        reservationList.appendChild(createListItem);
        
        let firstNameInput = firstName.value;
        let lastNameInput = lastName.value;
        let dateInInput = dateIn.value;
        let dateOutInput = dateOut.value;
        let peopleCountInput = peopleCount.value;

        firstName.value = '';
        lastName.value = '';
        dateIn.value = '';
        dateOut.value = '';
        peopleCount.value = '';
        
        nextBtn.disabled = true;

        editBtn.addEventListener('click', editFuncation);
        function editFuncation() {
            firstName.value = firstNameInput;
            lastName.value = lastNameInput;
            dateIn.value = dateInInput;
            dateOut.value = dateOutInput;
            peopleCount.value = peopleCountInput;

            createListItem.remove();
            nextBtn.disabled = false;
        }  
        
        continueBtn.addEventListener('click', continueFuncation);
        function continueFuncation() {
            let confirmListElement = document.createElement('li');
            confirmListElement.setAttribute('class', 'reservation-content');

            let confirmArticle = document.createElement('article');
            confirmArticle = article;

            let confirmBtn = document.createElement('button');
            confirmBtn.setAttribute('class', 'confirm-btn');
            confirmBtn.textContent = 'Confirm';

            let cancelBtn = document.createElement('button');
            cancelBtn.setAttribute('class', 'cancel-btn');
            cancelBtn.textContent = 'Cancel';

            confirmListElement.appendChild(confirmArticle);
            confirmListElement.appendChild(confirmBtn);
            confirmListElement.appendChild(cancelBtn);

            createListItem.remove();
            confirmList.appendChild(confirmListElement);

            confirmBtn.addEventListener('click', confirmReservation);
            function confirmReservation() {
                confirmList.remove();
                nextBtn.disabled = false;

                success.setAttribute('class' ,'reservation-confirmed');
                success.textContent = 'Confirmed.';
            }

            cancelBtn.addEventListener('click', cancelFuncation);
            function cancelFuncation() {
                confirmListElement.remove();
                nextBtn.disable = false;

                success.setAttribute('class', 'reservation-cancelled');
                success.textContent = 'Cancelled.';
            }
        }
    }
}





