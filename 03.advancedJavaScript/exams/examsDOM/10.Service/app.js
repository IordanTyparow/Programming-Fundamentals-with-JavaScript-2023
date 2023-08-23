window.addEventListener('load', solve);

function solve() {
    // Take inputs
    const currentType = document.getElementById('type-product');
    const description = document.getElementById('description');
    const clientName = document.getElementById('client-name');
    const clientPhone = document.getElementById('client-phone');

    // Take buttons
    const sendForm = document.querySelector('button[type="submit"]');
    const clearbtn = document.querySelector('.clear-btn');
    clearbtn.addEventListener('click', clearBtn);

    //Sections
    let receivedOrders = document.getElementById('received-orders');
    let completedOrders = document.getElementById('completed-orders');

    // Inplement sendFormBtn
    sendForm.addEventListener('click', (e) => {
        e.preventDefault();

        if (!currentType.value || !description.value || !clientName.value || !clientPhone.value) {
            return;
        }

        let currentTypeValue = currentType.value;
        let descriptionValue = description.value;
        let clientNameValue = clientName.value;
        let clientPhoneValue = clientPhone.value;

        // create div element
        let divEl = document.createElement('div');
        divEl.setAttribute('class', 'container');

        // create elements to attach to div
        let product = document.createElement('h2');
        product.textContent = `Product type for repair: ${currentTypeValue}`;

        let clientInformation = document.createElement('h3');
        clientInformation.textContent = `Client information: ${clientNameValue}, ${clientPhoneValue}`;

        let descriptionOfTheProblem = document.createElement('h4');
        descriptionOfTheProblem.textContent = `Description of the problem: ${descriptionValue}`;

        // create buttons to attach to div
        let startRepairBtn = document.createElement('button');
        startRepairBtn.textContent = 'Start repair';
        startRepairBtn.setAttribute('class', 'start-btn');
        startRepairBtn.addEventListener('click', startBtn);

        let finishedBtn = document.createElement('button');
        finishedBtn.textContent = 'Finish repair';
        finishedBtn.setAttribute('class', 'finish-btn');
        finishedBtn.disabled = true;
        finishedBtn.addEventListener('click', finishBtn);

        // Attach all elements
        divEl.appendChild(product);
        divEl.appendChild(clientInformation);
        divEl.appendChild(descriptionOfTheProblem);
        divEl.appendChild(startRepairBtn);
        divEl.appendChild(finishedBtn);

        // Attach div to received-orders
        receivedOrders.appendChild(divEl);

        // Clear
        clear();

        // Inplement startBtn
        function startBtn() {
            startRepairBtn.disabled = true;
            finishedBtn.disabled = false;
        }

        // Inplement finishBtn
        function finishBtn() {
            let div = document.createElement('div');
            div.setAttribute('class', 'container');

            let product = document.createElement('h2');
            product.textContent = `Product type for repair: ${currentTypeValue}`;

            let clientInformation = document.createElement('h3');
            clientInformation.textContent = `Client information: ${clientNameValue}, ${clientPhoneValue}`;

            let descriptionOfTheProblem = document.createElement('h4');
            descriptionOfTheProblem.textContent = `Description of the problem: ${descriptionValue}`;
            
            div.appendChild(product);
            div.appendChild(clientInformation);
            div.appendChild(descriptionOfTheProblem);

            completedOrders.appendChild(div);
            divEl.remove();
        }
    });

    // Inplement clearBtn
    function clearBtn() {
        [...completedOrders.querySelectorAll('div')].forEach(x => x.remove());
    }

    // Clear all input fields
    function clear() {
        currentType.value = '';
        description.value = '';
        clientName.value = '';
        clientPhone.value = '';
    }
}