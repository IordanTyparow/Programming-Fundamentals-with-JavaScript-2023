function solve() {

  let text = document.getElementById('input');
  let textArea = text.value.split('.').filter(s => s !== '');
  let resDiv = document.getElementById('output');

  while (textArea.length > 0) {
    let sliced = textArea.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = sliced;
    resDiv.appendChild(p);
  }

}