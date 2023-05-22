function solve() {
    
    let article = document.querySelector('section:nth-child(2) div:nth-child(2)');
    let progressSection = document.querySelector('section:nth-child(3) #in-progress');
    let completeSection = document.querySelector('section:nth-child(4) div:nth-child(2)');

    let button = document.getElementById('add');
    button.addEventListener('click', (e) => {
        e.preventDefault();

        let fields = document.querySelectorAll('form input');
        let textAreaDiscription = document.getElementById('description');

        if (fields.values && textAreaDiscription.value) {
            article.innerHTML +=
                `<article>
                <h3>${task.value}</h3>
                <p>${textAreaDiscription.value}</p>
                <p>${date.value}</p>
                <div class="flex">
                <button class="green">Start</button>
                <button class="red">Delete</button>
                </div>
                </article>`;
        }

        Array.from(article.querySelectorAll('button')).forEach(btn => {
            btn.addEventListener('click', (e) => {
                let button = e.target;
                let header = e.target.parentNode.parentNode.children[0];
                let description = e.target.parentNode.parentNode.children[1];
                let date = e.target.parentNode.parentNode.children[2];

                if (button.textContent === 'Start') {
                    progressSection.innerHTML +=
                        `<article>
                        <h3>${header.textContent}</h3>
                        <p>Description: ${description.textContent}</p>
                        <p>Due Date: ${date.textContent}</p>
                        <div class="flex">
                            <button class="red">Delete</button>
                            <button class="orange">Finish</button>
                        </div>
                    </article>
                    `;
                    e.target.parentNode.parentNode.remove();
                } else if (button.textContent === 'Delete') {
                    e.target.parentNode.parentNode.remove();
                }

                Array.from(progressSection.querySelectorAll('section:nth-child(3) button')).forEach(btn => {
                    btn.addEventListener('click', (e)=> {
                        let button = e.target;
                        let header = e.target.parentNode.parentNode.children[0];
                        let description = e.target.parentNode.parentNode.children[1];
                        let date = e.target.parentNode.parentNode.children[2];

                        if (button.textContent === 'Finish') {
                            completeSection.innerHTML += 
                            `<article>
                                <h3>${header.textContent}</h3>
                                <p>${description.textContent}</p>
                                <p>${date.textContent}</p>
                            </article>`;
                            e.target.parentNode.parentNode.remove();
                        } else if (button.textContent === 'Delete') {
                            e.target.parentNode.parentNode.remove();
                        }
                    });
                });
            });
        });
    });
}