function extractText() {
    let getTextElement = document.getElementById('items');
    let textAreaElements = document.getElementById('result');

    textAreaElements.textContent = getTextElement.textContent;
}