function solve() {

  let textElement = document.getElementById('text').value;
  let conventionElement = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');
  let ress = '';

  switch (conventionElement) {
    case 'Camel Case':
      for (let i = 0; i < textElement.length; i++) {
        if (textElement[i] === ' ') {
          ress += (textElement[i + 1].toUpperCase());
          i++;
        } else {
          ress += textElement[i].toLowerCase();
        }
      }
      break;
    case 'Pascal Case':
      ress += textElement[0].toUpperCase();
      for (let i = 1; i < textElement.length; i++) {
        if (textElement[i] === ' ') {
          ress += textElement[i + 1].toUpperCase();
          i++;
        } else {
          ress += textElement[i].toLowerCase();
        }
      }
      break;
    default:
      ress = 'Error!';
      break;
  }

  resultElement.textContent = ress;
}
