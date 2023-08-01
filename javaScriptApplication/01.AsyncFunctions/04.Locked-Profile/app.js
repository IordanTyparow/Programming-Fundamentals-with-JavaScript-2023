async function lockedProfile() {
    const main = document.getElementById('main');
    Array.from(main.children).forEach(x => x.remove());

    let response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
    let data = await response.json();
    let i = 0;

    function loadProfiles() {
        for (const user of Object.values(data)) {
            i++;
            let divElement = createElement('div', undefined, undefined, { 'class': 'profile' });
            createElement('img', '', divElement, { 'src': './iconProfile2.png', 'class': 'userIcon' });
            createElement('label', 'Lock', divElement, {});
            createElement('input', '', divElement, { 'type': 'radio', 'name': `user${i}Locked`, 'value': 'lock' }).checked = true;
            createElement('label', 'Unlock', divElement, {});
            createElement('input', '', divElement, { 'type': 'radio', 'name': `user${i}Locked`, 'value': 'unlock' });
            createElement('br', '', divElement, {});
            createElement('hr', '', divElement, {});
            createElement('label', 'Username', divElement, {});
            createElement('input', '', divElement, { 'type': 'text', 'name': `user${i}Username`, 'value': user.username, 'disabled': 'readonly' });

            let hiddenDiv = createElement('div', '', divElement, { 'id': `user${i}HiddenFields` });
            createElement('hr', '', hiddenDiv, {});
            createElement('label', 'Email:', hiddenDiv, {});
            createElement('input', '', hiddenDiv, { 'type': 'email', 'name': `user${i}Email`, 'value': user.email, 'disabled': 'readonly' });
            createElement('label', 'Age:', hiddenDiv, {});
            createElement('input', '', hiddenDiv, { 'type': 'email', 'name': `user${i}Age`, 'value': user.age, 'disabled': 'readonly' });

            let button = createElement('button', 'Show More', divElement, {});


            divElement.appendChild(hiddenDiv);
            divElement.appendChild(button);
            main.appendChild(divElement)
            Array.from(document.querySelectorAll(`input[value="lock"]`)).forEach(element => {
                if (element.checked) {
                    hiddenDiv.style.display = 'none';
                }
            });
        }
        Array.from(document.querySelectorAll(`input[value="unlock"]`)).forEach(element => {
            element.addEventListener('click', (e) => {
                let button = e.target.parentNode.children[10];
                let hiddenDiv = e.target.parentNode.children[9];

                if (element.checked) {
                    button.addEventListener('click', () => {
                        if (button.textContent === 'Show More') {
                            hiddenDiv.style.display = 'block';
                            button.textContent = 'Hide it';
                        } else {
                            hiddenDiv.style.display = 'none';
                            button.textContent = 'Show More';
                        }
                    });
                }
            });
        });
    }
    loadProfiles();

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