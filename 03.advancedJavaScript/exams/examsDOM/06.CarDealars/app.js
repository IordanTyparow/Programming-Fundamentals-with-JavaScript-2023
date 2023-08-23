window.addEventListener("load", solve);

function solve() {
  let makeElement = document.getElementById('make');
  let modelElement = document.getElementById('model');
  let productionYear = document.getElementById('year');
  let fuelType = document.getElementById('fuel');
  let originalCost = document.getElementById('original-cost');
  let sellingPrice = document.getElementById('selling-price');

  let profit = document.getElementById('profit');
  let profitMade = 0;

  let addCarBtn = document.getElementById('table-body');
  let cardList = document.getElementById('cars-list');

  let publishBtn = document.getElementById('publish');

  publishBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (makeElement.value === '' || modelElement.value === '' || productionYear.value === '' ||
      originalCost.value === '' || sellingPrice.value === '' || originalCost.value > sellingPrice.value) {
      return;
    }

    let editMake = makeElement.value;
    let editModel = modelElement.value;
    let editProductionYear = productionYear.value;
    let editFuelType = fuelType.value;
    let editOriginalCost = originalCost.value;
    let editSellingPrice = sellingPrice.value;

    let trElement = document.createElement('tr');
    trElement.setAttribute('class', 'row');

    trElement.innerHTML += `
      <td>${makeElement.value}</td>
      <td>${modelElement.value}</td>
      <td>${productionYear.value}</td>
      <td>${fuelType.value}</td>
      <td>${originalCost.value}</td>
      <td>${sellingPrice.value}</td>
      <td>
        <button class="action-btn edit">Edit</button>
        <button class="action-btn sell">Sell</button>
      </td>
    `;

    addCarBtn.appendChild(trElement);


    makeElement.value = '';
    modelElement.value = '';
    productionYear.value = '';
    fuelType.value = '';
    originalCost.value = '';
    sellingPrice.value = '';

    trElement.querySelector('.action-btn.edit').addEventListener('click', () => {
      makeElement.value = editMake;
      modelElement.value = editModel;
      productionYear.value = editProductionYear;
      fuelType.value = editFuelType;
      originalCost.value = editOriginalCost;
      sellingPrice.value = editSellingPrice;

      trElement.remove();
    });

    trElement.querySelector('.action-btn.sell').addEventListener('click', () => {
      let liElement = document.createElement('li');
      liElement.setAttribute('class', 'each-list');

      let totalCost = Math.abs(editSellingPrice - editOriginalCost);

      liElement.innerHTML += `
      <span>${editMake} ${editModel}</span>
      <span>${editProductionYear}</span>
      <span>${totalCost}</span>
      `;

      profitMade += totalCost

      cardList.appendChild(liElement);
      trElement.remove();

      profit.textContent = `${profitMade.toFixed(2)}`;
    });
  });
}
