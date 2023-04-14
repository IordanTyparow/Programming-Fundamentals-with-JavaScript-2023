function addItem() {
    let listElement = document.getElementById('items');
    let createElement = document.createElement('li');

    listElement.appendChild(createElement);

    let newElement = document.getElementById('newItemText');

    createElement.textContent = newElement.value;
}