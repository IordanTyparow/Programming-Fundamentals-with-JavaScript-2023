window.addEventListener("load", solve);

function solve() {
  let firstNameElement = document.getElementById('first-name');
  let lastNameElement = document.getElementById('last-name');
  let ageElement = document.getElementById('age');
  let genderElement = document.getElementById('genderSelect');
  let dishDescription = document.getElementById('task');

  let inProgressSection = document.getElementById('in-progress');
  let finishedSection = document.getElementById('finished');

  let dishesInProgressCounter = document.getElementById('progress-count');
  let counter = 0;

  let submitBtn = document.getElementById('form-btn');
  let clearBtn = document.getElementById('clear-btn');

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!firstNameElement.value || !lastNameElement.value || !ageElement.value || !dishDescription.value) {
      return;
    }

    let liElement = document.createElement('li');
    liElement.setAttribute('class', 'each-line');

    let articleElement = document.createElement('article');

    let fullName = document.createElement('h4');
    fullName.textContent = `${firstNameElement.value} ${lastNameElement.value}`;

    let genderAndAge = document.createElement('p');
    genderAndAge.textContent = `${genderElement.value}, ${ageElement.value}`;

    let description = document.createElement('p');
    description.textContent = `Dish description: ${dishDescription.value}`;

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit';

    let completeBtn = document.createElement('button');
    completeBtn.setAttribute('class', 'complete-btn');
    completeBtn.textContent = 'Mark as complete';

    articleElement.appendChild(fullName);
    articleElement.appendChild(genderAndAge);
    articleElement.appendChild(description);

    liElement.appendChild(articleElement);

    liElement.appendChild(editBtn);
    liElement.appendChild(completeBtn);

    inProgressSection.appendChild(liElement);

    counter++;
    dishesInProgressCounter.textContent = counter;

    let editFirstName = firstNameElement.value;
    let editLastname = lastNameElement.value;
    let editAge = ageElement.value;
    let editDescription = dishDescription.value;

    firstNameElement.value = '';
    lastNameElement.value = '';
    ageElement.value = '';
    dishDescription.value = '';

    editBtn.addEventListener('click', () => {
      firstNameElement.value = editFirstName;
      lastNameElement.value = editLastname;
      ageElement.value = editAge;
      dishDescription.value = editDescription;

      liElement.remove();

      counter--;
      dishesInProgressCounter.textContent = counter;
    });

    completeBtn.addEventListener('click', () => {
      liElement.removeChild(editBtn);
      liElement.removeChild(completeBtn);

      finishedSection.appendChild(liElement);

      counter--;
      dishesInProgressCounter.textContent = counter;
    });

    clearBtn.addEventListener('click', (e) => {
      while (finishedSection.hasChildNodes()) {
        finishedSection.removeChild(finishedSection.firstChild);
      }
    });
  });
}
