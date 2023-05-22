function search() {

   let listItemsElements = Array.from(document.querySelectorAll('#towns li'));
   let searchingTextElement = document.getElementById('searchText').value;
   let result = document.querySelector('#result');
   let counter = 0;

   for (const town of listItemsElements) {
      if (town.textContent.includes(searchingTextElement)) {
         counter++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   result.textContent = `${counter} matches found`;
}
