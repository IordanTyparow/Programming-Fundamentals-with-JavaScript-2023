window.addEventListener('load', solve);

function solve() {
    // Take all Inputs
    const genderInputElement = document.getElementById('genre');
    const nameInputElement = document.getElementById('name');
    const authorInputElement = document.getElementById('author');
    const dateInputElement = document.getElementById('date');

    // Take all Sections
    const collectionOfSongs = document.querySelector('.all-hits-container');
    const savedSongs = document.querySelector('.saved-container');

    // Total Likes Value
    let totalLikesInputP = document.querySelector('.likes p');
    let total = 0;

    // addBtn
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const genderValue = genderInputElement.value;
        const nameValue = nameInputElement.value;
        const authorValue = authorInputElement.value;
        const dateValue = dateInputElement.value;

        if (!genderValue || !nameValue || !authorValue || !dateValue) {
            return;
        }

        // Create div 
        let divEl = document.createElement('div');
        divEl.classList.add('hits-info');

        // Create Elements to attach to div
        let img = document.createElement('img');
        img.src = "./static/img/img.png";

        let gender = document.createElement('h2');
        gender.textContent = `Gender: ${genderValue}`;

        let name = document.createElement('h2');
        name.textContent = `Name: ${nameValue}`;

        let author = document.createElement('h2');
        author.textContent = `Author: ${authorValue}`;

        let date = document.createElement('h3');
        date.textContent = `Date: ${dateValue}`;

        // Create Buttons
        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save song';
        saveBtn.addEventListener('click', saveBtnFunction);

        let likeBtn = document.createElement('button');
        likeBtn.classList.add('like-btn');
        likeBtn.textContent = 'Like song';
        likeBtn.addEventListener('click', like);

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteBtnFunction);

        // Attach all elements to div
        divEl.appendChild(img);
        divEl.appendChild(gender);
        divEl.appendChild(name);
        divEl.appendChild(author);
        divEl.appendChild(date);
        divEl.appendChild(saveBtn);
        divEl.appendChild(likeBtn);
        divEl.appendChild(deleteBtn);

        // Attach div to Collection Section
        collectionOfSongs.appendChild(divEl);
        // Invoking clearFunction
        clear();

        // Inplement LikeFunction
        function like() {
            total += 1;
            totalLikesInputP.textContent = `Total Likes: ${total}`;
            likeBtn.disabled = true;
        }

        // Inplement SaveBtn
        function saveBtnFunction() {
            // Create div
            let divEl2 = document.createElement('div');
            divEl2.classList.add('hits-info');

            // Create element to Attach to div
            let imgEl = document.createElement('img');
            imgEl.src = "./static/img/img.png";

            let genderEl = document.createElement('h2');
            genderEl.textContent = `Gender: ${genderValue}`;

            let nameEl = document.createElement('h2');
            nameEl.textContent = `Name: ${nameValue}`;

            let authorEl = document.createElement('h2');
            authorEl.textContent = `Author: ${authorValue}`;

            let dateEl = document.createElement('h3');
            dateEl.textContent = `Date: ${dateValue}`;

            let deleteBtnEl = document.createElement('button');
            deleteBtnEl.textContent = 'Delete';
            deleteBtnEl.classList.add('delete-btn');
            deleteBtnEl.addEventListener('click', (e) => {
                e.currentTarget.parentNode.remove();
            });

            divEl2.appendChild(imgEl);
            divEl2.appendChild(genderEl);
            divEl2.appendChild(nameEl);
            divEl2.appendChild(authorEl);
            divEl2.appendChild(dateEl);
            divEl2.appendChild(deleteBtnEl);

            // Attach div to savedSection
            savedSongs.appendChild(divEl2);
            divEl.remove();
        }

        // Inplement deleteBtn
        function deleteBtnFunction() {
            divEl.remove();
        }
    });


    // Inplement clearFunction
    function clear() {
        genderInputElement.value = '';
        nameInputElement.value = '';
        authorInputElement.value = '';
        dateInputElement.value = '';
    }
}