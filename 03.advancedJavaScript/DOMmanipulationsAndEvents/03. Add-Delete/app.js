function addItem() {

    let ulItemsElements = document.getElementById('items');
    let inputFieldElement = document.getElementById('newItemText');

    let createLiElement = document.createElement('li');
    createLiElement.textContent = inputFieldElement.value;
    
    let createAelement = document.createElement('a');
    createAelement.href = '#';
    createAelement.textContent = '[Delete]';

    createAelement.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
    });

    createLiElement.appendChild(createAelement);
    ulItemsElements.appendChild(createLiElement);

    inputFieldElement.value = '';
}