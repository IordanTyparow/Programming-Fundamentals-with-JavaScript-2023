function solve() {
    // Take all inputs
    let fnameElement = document.getElementById('fname');
    let lnameElement = document.getElementById('lname');
    let emailElement = document.getElementById('email');
    let birthElement = document.getElementById('birth');
    let positionElement = document.getElementById('position');
    let salaryElement = document.getElementById('salary');

    let hireWorkerBtn = document.getElementById('add-worker');

    let tableBtn = document.getElementById('tbody');

    let budget = 0;
    let currentSalary = document.getElementById('sum');

    // Inplement hireWorkerBtn
    hireWorkerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (fnameElement.value === '' || lnameElement.value === '' ||
            emailElement.value === '' || birthElement.value === '' ||
            positionElement.value === '' || salaryElement.value === '') {
            return;
        }

        let trElement = document.createElement('tr');
        trElement.innerHTML += `
            <td>${fnameElement.value}</td>
            <td>${lnameElement.value}</td>
            <td>${emailElement.value}</td>
            <td>${birthElement.value}</td>
            <td>${positionElement.value}</td>
            <td>${salaryElement.value}</td>
            <td><button class="fired">Fired</button> <button class="edit">Edit</button></td>
        `;

        budget += Number(salaryElement.value);
        currentSalary.textContent = budget.toFixed(2);

        tableBtn.appendChild(trElement);

        tableBtn.querySelector('.edit').addEventListener('click', editBtn);
        tableBtn.querySelector('.fired').addEventListener('click', firedBtn);

        fnameElement.value = '';
        lnameElement.value = '';
        emailElement.value = '';
        birthElement.value = '';
        positionElement.value = '';
        salaryElement.value = '';
    });

    //Inplement EditButton
    function editBtn(e) {
        let currentTarget = e.currentTarget.parentNode.parentNode;

        let fnameEdit = currentTarget.querySelector(':nth-child(1)').textContent;
        let lnameEdit = currentTarget.querySelector(':nth-child(2)').textContent;
        let emailEdit = currentTarget.querySelector(':nth-child(3)').textContent;
        let birthEdit = currentTarget.querySelector(':nth-child(4)').textContent;
        let positionEdit = currentTarget.querySelector(':nth-child(5)').textContent;
        let salaryEdit = currentTarget.querySelector(':nth-child(6)').textContent;

        fnameElement.value = fnameEdit;
        lnameElement.value = lnameEdit;
        emailElement.value = emailEdit;
        birthElement.value = birthEdit;
        positionElement.value = positionEdit;
        salaryElement.value = salaryEdit;

        budget = Number(budget - salaryEdit);
        currentSalary.textContent = budget.toFixed(2);

        if (budget === 0) {
            currentSalary.textContent = '0.00';
        }

        currentTarget.remove();
    }

    //Inplement FiredBtn
    function firedBtn(e) {
        let currentTarget = e.currentTarget.parentNode.parentNode;

        let salaryFired = currentTarget.querySelector(':nth-child(6)').textContent;

        budget = Number(budget - salaryFired);
        currentSalary.textContent = budget.toFixed(2);

        if (budget === 0) {
            currentSalary.textContent = '0.00';
        }

        currentTarget.remove();
    }
}
solve()