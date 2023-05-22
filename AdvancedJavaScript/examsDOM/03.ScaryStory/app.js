window.addEventListener("load", solve);

function solve() {

  let firstName = document.getElementById('first-name');
  let lastName = document.getElementById('last-name');
  let age = document.getElementById('age');
  let storyTitle = document.getElementById('story-title');
  let gendre = document.getElementById('genre');
  let storyText = document.getElementById('story');

  console.log();

  let publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', publishStory);
  function publishStory() {

    if (firstName.value == ''
      || lastName.value == ''
      || age.value == ''
      || storyTitle.value == ''
      || storyText.value == '') {
      return;
    }
  }
}
