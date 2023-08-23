window.addEventListener('load', solve);

function solve() {
    // Take all inputs
    let modelElement = document.getElementById('model');
    let yearElement = document.getElementById('year');
    let descriptionElement = document.getElementById('description');
    let priceElement = document.getElementById('price');

    // Take Buttons
    let addBtn = document.getElementById('add');
    let totalPriceInput = document.querySelector('.total-price');

    let total = 0;

    // Sections
    let furnitureList = document.getElementById('furniture-list');

    // Inplement addBtn
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!modelElement.value || !yearElement.value ||
            !descriptionElement.value || !priceElement.value
            || yearElement.value < 0 || priceElement < 0) {
            return;
        }

        // Create trInfo

        let trInfo = document.createElement('tr');
        trInfo.classList.add('info');

        let modelTd = document.createElement('td');
        modelTd.textContent = modelElement.value

        let priceTd = document.createElement('td');
        priceTd.textContent = `${Number(priceElement.value).toFixed(2)}`;

        let buttonsTd = document.createElement('td');

        let moreInfoBtn = document.createElement('button');
        moreInfoBtn.classList.add('moreBtn')
        moreInfoBtn.textContent = 'More Info';
        moreInfoBtn.addEventListener('click', moreInfo);

        let buyItBtn = document.createElement('button');
        buyItBtn.classList.add('buyBtn')
        buyItBtn.textContent = 'Buy it';
        buyItBtn.addEventListener('click', buyIt);

        buttonsTd.appendChild(moreInfoBtn);
        buttonsTd.appendChild(buyItBtn);

        // create trHide
        let trHide = document.createElement('tr');
        trHide.classList.add('hide');

        let yearTd = document.createElement('td');
        yearTd.textContent = `Year: ${yearElement.value}`;

        let descriptionTd = document.createElement('td');
        descriptionTd.textContent = `Description: ${descriptionElement.value}`;
        descriptionTd.colSpan = '3';

        trHide.appendChild(yearTd);
        trHide.appendChild(descriptionTd);

        // append All elements
        trInfo.appendChild(modelTd);
        trInfo.appendChild(priceTd);
        trInfo.appendChild(buttonsTd);

        // append trInfo to furniture Section
        furnitureList.appendChild(trInfo);
        furnitureList.appendChild(trHide);

        // Clear Fields
        modelElement.value = '';
        yearElement.value = '';
        descriptionElement.value = '';
        priceElement.value = '';

        // Inplement moreInfoBtn
        function moreInfo(e) {
            if (e.currentTarget.textContent === 'More Info') {
                moreInfoBtn.textContent = 'Less Info';
                trHide.style.display = 'contents';
            } else {
                moreInfoBtn.textContent = 'More Info';
                trHide.classList.remove('none');
                trHide.classList.add('hide');
                trHide.style.display = 'none';
            }
        }

        // Inplement buyItBtn
        function buyIt() {
            total += Number(priceTd.textContent)
            totalPriceInput.textContent = total.toFixed(2);

            trInfo.remove();
        }
    });
}
