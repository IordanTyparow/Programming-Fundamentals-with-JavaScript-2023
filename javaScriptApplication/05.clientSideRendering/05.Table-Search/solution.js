import { getAllStudents } from "./src/api.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";

let tbody = document.querySelector('tbody');
let students = await getAllStudents();

let template = (students) => html`
   ${students.map(s => html`<tr>
      <td>${s.firstName} ${s.lastName}</td>
      <td>${s.email}</td>
      <td>${s.course}</td>
   </tr>`)}
`;

render(template(Object.values(students)), tbody);

let input = document.getElementById('searchField');

document.querySelector('#searchBtn').addEventListener('click', onClick);
function onClick(e) {

   let searchTerm = input.value.toLowerCase();

   input.value = '';

   let tableRows = tbody.children;

   for (const row of tableRows) {
      let rowContent = row.textContent.toLowerCase();

      row.classList.remove('select');

      if (rowContent.includes(searchTerm)) {
         row.classList.add('select');
      }
   }
}
