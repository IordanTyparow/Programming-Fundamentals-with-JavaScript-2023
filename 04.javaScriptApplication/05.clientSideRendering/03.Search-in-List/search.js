import { html, render } from "./node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

let townUlElement = document.getElementById('towns');

let townTemplate = html`
   <ul>
     ${towns.map(t => html`<li id="${t}">${t}</li>`)}
   </ul>
`;

render(townTemplate, townUlElement);

let btn = document.querySelector('button');
btn.addEventListener('click', onClick);

function onClick(e) {
   let text = document.getElementById('searchText').value;

   let result = towns.filter((t) => {
      if (t.includes(text)) {
         let match = document.getElementById(t);
         match.classList.add('active');
         return t;
      }
   });

   text = '';
   document.getElementById('result').textContent = `${result.length} matches found`;
}