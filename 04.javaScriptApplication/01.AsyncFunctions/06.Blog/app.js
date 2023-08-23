function attachEvents() {
    let loadPostsBtn = document.getElementById('btnLoadPosts');
    let postsElements = document.getElementById('posts');
    let viewBtn = document.getElementById('btnViewPost');

    let url = `http://localhost:3030/jsonstore/blog/posts`;
    let urlForDetails = `http://localhost:3030/jsonstore/blog/comments`;

    loadPostsBtn.addEventListener('click', () => {
        postsElements.innerHTML = '';
        fetch(url)
            .then(ress => ress.json())
            .then(data => {
                for (const [id, body] of Object.entries(data)) {
                    let createOption = document.createElement('option');
                    createOption.value = id;
                    createOption.textContent = body.title;
                    postsElements.appendChild(createOption);
                }
            });
    });

    viewBtn.addEventListener('click', load);

    function load() {
        fetch(urlForDetails)
            .then(ress => ress.json())
            .then(data => {
                let currentId = '';
                for (const key of Object.values(data)) {
                    if (key.postId === postsElements.value) {
                        currentId = key.id;
                    }
                }

                fetch(`http://localhost:3030/jsonstore/blog/comments/${currentId}`)
                    .then(ress => ress.json())
                    .then(information => {

                        let currentHeader = document.querySelector(`option[value=${information.postId}]`);

                        let h1 = document.querySelector('#post-title');
                        h1.textContent = '';
                        h1.textContent = currentHeader.textContent;

                        let comments = document.getElementById('post-comments');
                        comments.innerHTML = '';

                        let createLi = document.createElement('li');
                        createLi.textContent = information.text;

                        comments.appendChild(createLi);
                    });
            });

        fetch(url)
            .then(ress => ress.json())
            .then(data => {
                let postBody = document.getElementById('post-body');
                for (const [key, body] of Object.entries(data)) {
                    if (postsElements.value === key) {
                        postBody.textContent = body.body;
                    }
                }
            });
    }
}

attachEvents();