import { html, render } from "../../node_modules/lit-html/lit-html.js";

let main = document.getElementById('main');

export const homePage = (ctx) => {
    let template = html`
    <section id="home">
        <h1>Learn more about your favorite fruits</h1>
        <img src="./images/pexels-pixabay-161559-dImkWBDHz-transformed (1).png" alt="home" />
    </section>
    `;

    render(template, main);
}
