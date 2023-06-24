function lockedProfile() {

    let showMoreBtn = document.querySelector('.profile button');

    showMoreBtn.addEventListener('click', (e) => {
        let button = e.target;
        let profile = button.parentNode;
        let moreInformation = profile.getElementsByTagName('div')[0];
        let lockStatus = profile.querySelector('input[type="radio"]:checked').value;

        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInformation.style.display = 'block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInformation.style.display = 'none';
                button.textContent = 'Show more';
            }
        }

        data();
    });

    let currertUser = document.querySelector('.user1Username');

    async function data() {
        let response = await fetch(`http://localhost:3030/jsonstore/advanced/profiles/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a`);
        let data = await response.json();

        currertUser.removeAttribute('readonly');
        currertUser.value = data.username;
    }
}