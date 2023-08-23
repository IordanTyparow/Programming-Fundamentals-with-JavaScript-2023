window.addEventListener("load", solve);

function solve() {
    let gameNameElement = document.getElementById('gem-name');
    let colorElement = document.getElementById('color');
    let caratsElement = document.getElementById('carats');
    let priceElement = document.getElementById('price');
    let typeElement = document.getElementById('type');

    let previewList = document.getElementById('preview-list');
    let collectionList = document.getElementById('collection');

    let addGemElement = document.getElementById('add-btn');

    addGemElement.addEventListener('click', (e) => {
        e.preventDefault();

        if (gameNameElement.value == '' || 
            colorElement.value == '' || 
            caratsElement.value == '' || 
            priceElement.value == '' || 
            typeElement.value == '') {
            return;
        }

        let liGemInfoElement = document.createElement('li');
        liGemInfoElement.setAttribute('class', 'gem-info');

        let articleElement = document.createElement('article');

        let gemName = document.createElement('h4');
        gemName.textContent = `${gameNameElement.value}`;

        let color = document.createElement('p');
        color.textContent = `Color: ${colorElement.value}`;

        let carats = document.createElement('p');
        carats.textContent = `Carats: ${caratsElement.value}`;

        let price = document.createElement('p');
        price.textContent = `Price: ${priceElement.value}`;

        let type = document.createElement('p');
        type.textContent = `Type: ${typeElement.value}`;

        articleElement.appendChild(gemName);
        articleElement.appendChild(color);
        articleElement.appendChild(carats);
        articleElement.appendChild(price);
        articleElement.appendChild(type);

        liGemInfoElement.appendChild(articleElement);

        let saveToCollectionBtn = document.createElement('button');
        saveToCollectionBtn.setAttribute('class', 'save-btn');
        saveToCollectionBtn.textContent = 'Save to Collection';

        let editInformationBtn = document.createElement('button');
        editInformationBtn.setAttribute('class', 'edit-btn');
        editInformationBtn.textContent = 'Edit Information';

        let cancelBtn = document.createElement('button');
        cancelBtn.setAttribute('class', 'cancel-btn');
        cancelBtn.textContent = 'Cancel';

        liGemInfoElement.appendChild(saveToCollectionBtn);
        liGemInfoElement.appendChild(editInformationBtn);
        liGemInfoElement.appendChild(cancelBtn);

        previewList.appendChild(liGemInfoElement);
        
        let gemEdit = gameNameElement.value;
        let colorEdit = colorElement.value;
        let caratsEdit = caratsElement.value;
        let priceEdit = priceElement.value;
        let typeEdit = typeElement.value; 
        
        gameNameElement.value = '';
        colorElement.value = '';
        caratsElement.value = '';
        priceElement.value = '';
        typeElement.value = '';

        addGemElement.disabled = true;

        saveToCollectionBtn.addEventListener('click', (e) => {
            let listItem = document.createElement('li');
             
            let collectionItems = document.createElement('p');
            collectionItems.setAttribute('class', 'collection-item');
            collectionItems.textContent = `${gemEdit} - Color: ${colorEdit}/ Carats: ${colorEdit}/ Price: ${priceEdit}/ Type: ${typeEdit}`;
            
            listItem.appendChild(collectionItems);
            collectionList.appendChild(listItem);

            liGemInfoElement.remove();
            addGemElement.disabled = false;
        });

        editInformationBtn.addEventListener('click', (e) => {
            gameNameElement.value = gemEdit;
            colorElement.value = colorEdit;
            caratsElement.value = caratsEdit;
            priceElement.value = priceEdit;
            typeElement.value = typeEdit;

            liGemInfoElement.remove();
            addGemElement.disabled = false;
        });

        cancelBtn.addEventListener('click', (e) => {
            liGemInfoElement.remove();
            addGemElement.disabled = false;
        });
    });
}
