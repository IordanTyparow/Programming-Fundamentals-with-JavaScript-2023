function loadForm() {
    let url = `http://localhost:3030/jsonstore/collections/students`;

    fetch(url)
        .then(ress => ress.json())
        .then(data => {

            for (const value of Object.values(data)) {
                let trElement = document.createElement('tr');

                let firstNameTh = document.createElement('th');
                firstNameTh.textContent = value.firstName;

                let lastNameTh = document.createElement('th');
                lastNameTh.textContent = value.lastName;

                let facultyNumberth = document.createElement('th');
                facultyNumberth.textContent = value.facultyNumber;

                let gradeth = document.createElement('th');
                gradeth.textContent = value.grade;

                trElement.appendChild(firstNameTh);
                trElement.appendChild(lastNameTh);
                trElement.appendChild(facultyNumberth);
                trElement.appendChild(gradeth);

                table.appendChild(trElement);
            }
        });

    let submitBtn = document.getElementById('submit');
    let table = document.querySelector('#results tbody');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let form = document.getElementById('form');
        let formData = new FormData(form);

        let firstName = formData.get('firstName');
        let lastName = formData.get('lastName');
        let facultyNumber = formData.get('facultyNumber');
        let grade = formData.get('grade');

        if (!firstName || !lastName || !facultyNumber || !grade) {
            return;
        }

        let trElement = document.createElement('tr');

        let firstNameTh = document.createElement('th');
        firstNameTh.textContent = firstName;

        let lastNameTh = document.createElement('th');
        lastNameTh.textContent = lastName;

        let facultyNumberth = document.createElement('th');
        facultyNumberth.textContent = facultyNumber;

        let gradeth = document.createElement('th');
        gradeth.textContent = grade;

        trElement.appendChild(firstNameTh);
        trElement.appendChild(lastNameTh);
        trElement.appendChild(facultyNumberth);
        trElement.appendChild(gradeth);

        fetch(`http://localhost:3030/jsonstore/collections/students`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                facultyNumber: facultyNumber,
                grade: grade,
            })
        })

        table.appendChild(trElement);

        document.querySelectorAll('input[type="text"]').forEach(x => x.value = '');
    });
}

loadForm();