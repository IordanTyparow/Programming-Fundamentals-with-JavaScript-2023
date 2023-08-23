window.addEventListener('load', solve);

function solve() {
        // Inputs
        let carModelElement = document.getElementById('car-model');
        let carYearElement = document.getElementById('car-year');
        let partNameElement = document.getElementById('part-name');
        let partNumberElement = document.getElementById('part-number');
        let conditionElement = document.getElementById('condition');

        //Sections
        let partInfoSection = document.querySelector('.info-list');
        let confirmList = document.querySelector('.confirm-list');

        //img
        let completeImg = document.getElementById('complete-img');
        //text
        let completeText = document.getElementById('complete-text');

        // buttons
        let nextBtn = document.getElementById('next-btn');

        // Inplement nextBtn
        nextBtn.addEventListener('click', (e) => {
                e.preventDefault();

                let carModelValue = carModelElement.value;
                let carYearValue = carYearElement.value
                let partNameValue = partNameElement.value;
                let partNumberValue = partNumberElement.value;
                let conditionValue = conditionElement.value

                if (!carModelValue || !carYearValue || !partNameValue || !partNumberValue || !conditionValue || carYearValue < 1980 || carYearValue > 2023) {
                        return;
                }

                let liElement = document.createElement('li');
                liElement.setAttribute('class', 'part-content');

                let artcleElement = document.createElement('article');

                let carModel = document.createElement('p');
                carModel.textContent = `Car Model: ${carModelValue}`;

                let carYear = document.createElement('p');
                carYear.textContent = `Car Year: ${carYearValue}`;

                let partName = document.createElement('p');
                partName.textContent = `Part Name: ${partNameValue}`;

                let partNumber = document.createElement('p');
                partNumber.textContent = `Part Number: ${partNumberValue}`;

                let condition = document.createElement('p');
                condition.textContent = `Condition: ${conditionValue}`;

                let editBtn = document.createElement('button');
                editBtn.textContent = 'Edit';
                editBtn.setAttribute('class', 'edit-btn');

                let continueBtn = document.createElement('button');
                continueBtn.textContent = 'Continue';
                continueBtn.setAttribute('class', 'continue-btn');

                // attach all elements
                artcleElement.appendChild(carModel);
                artcleElement.appendChild(carYear);
                artcleElement.appendChild(partName);
                artcleElement.appendChild(partNumber);
                artcleElement.appendChild(condition);

                liElement.appendChild(artcleElement);
                liElement.appendChild(editBtn);
                liElement.appendChild(continueBtn);

                partInfoSection.appendChild(liElement);

                completeImg.style.visibility = 'hidden';
                completeText.textContent = '';

                nextBtn.disabled = true;

                carModelElement.value = '';
                carYearElement.value = '';
                partNameElement.value = '';
                partNumberElement.value = '';
                conditionElement.value = '';

                // Inplement editBtn
                editBtn.addEventListener('click', () => {
                        carModelElement.value = carModelValue;
                        carYearElement.value = carYearValue;
                        partNameElement.value = partNameValue;
                        partNumberElement.value = partNumberValue;
                        conditionElement.value = conditionValue;

                        liElement.remove();
                        nextBtn.disabled = false;
                });

                // Inplemet continueBtn
                continueBtn.addEventListener('click', () => {
                        let liEl = document.createElement('li');
                        liEl.setAttribute('class', 'part-content');

                        let artcleEl = document.createElement('article');

                        let carModelEl = document.createElement('p');
                        carModelEl.textContent = `Car Model: ${carModelValue}`;

                        let carYearEl = document.createElement('p');
                        carYearEl.textContent = `Car Year: ${carYearValue}`;

                        let partNameEl = document.createElement('p');
                        partNameEl.textContent = `Part Name: ${partNameValue}`;

                        let partNumberEl = document.createElement('p');
                        partNumberEl.textContent = `Part Number: ${partNumberValue}`;

                        let conditionEl = document.createElement('p');
                        conditionEl.textContent = `Condition: ${conditionValue}`;

                        let confirmBtnEl = document.createElement('button');
                        confirmBtnEl.textContent = 'Confirm';
                        confirmBtnEl.setAttribute('class', 'confirm-btn');

                        let cancelBtnEl = document.createElement('button');
                        cancelBtnEl.textContent = 'Cancel';
                        cancelBtnEl.setAttribute('class', 'cancel-btn');

                        artcleEl.appendChild(carModelEl);
                        artcleEl.appendChild(carYearEl);
                        artcleEl.appendChild(partNameEl);
                        artcleEl.appendChild(partNumberEl);
                        artcleEl.appendChild(conditionEl);

                        liEl.appendChild(artcleEl);
                        liEl.appendChild(confirmBtnEl);
                        liEl.appendChild(cancelBtnEl);

                        confirmList.appendChild(liEl);

                        liElement.remove();

                        confirmBtnEl.addEventListener('click', (e) => {
                                e.currentTarget.parentNode.remove();
                                nextBtn.disabled = false;
                                completeImg.style.visibility = 'visible';
                                completeText.textContent = 'Part is Ordered!';
                        });

                        cancelBtnEl.addEventListener('click', (e) => {
                                e.currentTarget.parentNode.remove();
                                nextBtn.disabled = false;
                        });
                });
        });
}




