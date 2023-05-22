function solve() {

  let textarea = document.getElementsByTagName('textarea');
  let generateBtn = document.getElementsByTagName('button')[0];

  generateBtn.addEventListener('click', (e) => {
    console.log(textarea[0].value);
  });
}