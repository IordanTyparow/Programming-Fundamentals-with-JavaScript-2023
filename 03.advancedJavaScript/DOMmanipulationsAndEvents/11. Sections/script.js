function create(words) {
   
   let resultDiv = document.getElementById('content');

   while (words.length > 0) {
      let hiddenParagraph = words.shift();
      let createDiv = document.createElement('div');

      let createP = document.createElement('p');   
      createP.textContent = hiddenParagraph;
      createP.style.display = 'none';

      createDiv.appendChild(createP);
      resultDiv.appendChild(createDiv);

      createDiv.addEventListener('click', (e) => {
         createP.style.display = 'block';
      });
   }
}