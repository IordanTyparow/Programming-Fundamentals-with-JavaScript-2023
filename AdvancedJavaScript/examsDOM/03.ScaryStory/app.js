window.addEventListener("load", solve);

function solve() {

  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let ageElement = document.getElementById('age');
  let storyTitle = document.getElementById('story-title');
  let gendreElement = document.getElementById('genre');
  let storyText = document.getElementById('story');

  let previewList = document.getElementById('preview-list');
  let body = document.querySelector('.body')
  let main = document.getElementById('main');

  let publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (firstName.value == ''
      || lastName.value == ''
      || ageElement.value == ''
      || storyTitle.value == ''
      || storyText.value == ''
      || gendreElement.value == '') {
      return;
    }

    let liElement = document.createElement('li');
    liElement.setAttribute('class', 'story-info');

    let articleElement = document.createElement('article');

    let name = document.createElement('h4');
    name.textContent = `Name: ${firstName.value} ${lastName.value}`;

    let age = document.createElement('p');
    age.textContent = `Age: ${ageElement.value}`;

    let title = document.createElement('p');
    title.textContent = `Title: ${storyTitle.value}`;

    let gendre = document.createElement('p');
    gendre.textContent = `Genre: ${gendreElement.value}`;

    let text = document.createElement('p');
    text.textContent = `${storyText.value}`;

    let saveBtn = document.createElement('button');
    saveBtn.setAttribute('class', 'save-btn');
    saveBtn.textContent = 'Save Story';

    let editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit Story';


    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.textContent = 'Delete Story';

    articleElement.appendChild(name);
    articleElement.appendChild(age);
    articleElement.appendChild(title);
    articleElement.appendChild(gendre);
    articleElement.appendChild(text);

    liElement.appendChild(articleElement);

    liElement.appendChild(saveBtn);
    liElement.appendChild(editBtn);
    liElement.appendChild(deleteBtn);

    previewList.appendChild(liElement);

    let editFirstName = firstName.value;
    let editLastName = lastName.value;
    let editAge = ageElement.value;
    let editStoryTitle = storyTitle.value;
    let editStoryText = storyText.value;

    firstName.value = '';
    lastName.value = '';
    ageElement.value = '';
    storyTitle.value = '';
    storyText.value = '';

    publishBtn.disabled = true;

    editBtn.addEventListener('click', (e) => {
      firstName.value = editFirstName;
      lastName.value = editLastName;
      ageElement.value = editAge;
      storyTitle.value = editStoryTitle;
      storyText.value = editStoryText;

      e.currentTarget.parentNode.remove();

      publishBtn.disabled = false;
    });

    saveBtn.addEventListener('click', (e) => {
      main.remove();

      let createFinallHeader = document.createElement('h1');
      createFinallHeader.textContent = 'Your scary story is saved!';

      let createDiv = document.createElement('div');
      createDiv.setAttribute('id', 'main');

      body.appendChild(createDiv);
      createDiv.appendChild(createFinallHeader);
    });

    deleteBtn.addEventListener('click', (e) => {
      e.currentTarget.parentNode.remove();
      publishBtn.disabled = false;
    });
  })
}


