async function solution() {

    let main = document.getElementById('main');

    let response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/list`);
    let data = await response.json();

    data.forEach(info => {

        let div = document.createElement('div');
        div.setAttribute('class', 'accordion');

        let divHead = document.createElement('div');
        divHead.setAttribute('class', 'head');

        let span = document.createElement('span');
        span.textContent = `${info.title}`;

        let button = document.createElement('button');
        button.textContent = 'More';
        button.setAttribute('class', 'button');
        button.setAttribute('id', `${info._id}`);

        let divExtra = document.createElement('div');
        divExtra.setAttribute('class', 'extra');

        let p = document.createElement('p');

        button.addEventListener('click', toggle);

        divHead.appendChild(span);
        divHead.appendChild(button);
        divExtra.appendChild(p);
        div.appendChild(divHead);
        div.appendChild(divExtra);


        main.appendChild(div);
    });

    async function toggle(e) {
        let currentId = e.currentTarget.id;

        let url = `http://localhost:3030/jsonstore/advanced/articles/details/${currentId}`;

        let response = await fetch(url);
        let data = await response.json();

        let p = e.target.parentNode.parentNode.children[1].children[0];
        p.textContent = `${data.content}`;
 
        let extraSection = e.target.parentNode.parentNode.children[1]
    
        if (e.target.textContent === 'More') {
            extraSection.style.display = 'block';
            e.target.textContent = 'Less';
        } else {
            extraSection.style.display = 'none';
            e.target.textContent = 'More';
        }
    }

}

solution();