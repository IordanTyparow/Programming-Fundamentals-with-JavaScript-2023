function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let allInfo = document.querySelectorAll('tbody tr');
   let textField = document.getElementById('searchField');

   function onClick() {
      for (const row of allInfo) {
         row.classList.remove('select');
         if (textField.value !== '' && row.innerHTML.includes(textField.value)) {
            row.classList = 'select';
         }
      }
   }
}