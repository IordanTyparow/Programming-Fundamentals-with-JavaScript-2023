window.addEventListener("load", solve);

function solve() {
  let titleElement = document.getElementById('post-title');
  let postCategory = document.getElementById('post-category');
  let contentElement = document.getElementById('post-content');

  let reviewList = document.getElementById('review-list');
  let publishedList = document.getElementById('published-list');

  let publishBtn = document.getElementById('publish-btn');
  let clearBtn = document.getElementById('clear-btn');

  publishBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (titleElement.value === '' || postCategory.value === '' || contentElement.value === '') {
      return;
    }

    let firstliElement = document.createElement('li');
    firstliElement.setAttribute('class', 'rpost');

    firstliElement.innerHTML = `
      <article>
        <h4>${titleElement.value}</h4>
        <p>Category: ${postCategory.value}</p>
        <p>Content: ${contentElement.value}</p>
      </article>
      <button class="action-btn edit">Edit</button>
      <button class="action-btn approve">Approve</button>
    `;

    reviewList.appendChild(firstliElement);

    let editTitle = titleElement.value;
    let editPostCategory = postCategory.value;
    let editContentElement = contentElement.value;

    titleElement.value = '';
    postCategory.value = '';
    contentElement.value = '';

    reviewList.querySelector('.action-btn.edit').addEventListener('click', () => {
      titleElement.value = editTitle;
      postCategory.value = editPostCategory;
      contentElement.value = editContentElement;

      let currentLi = document.querySelector('.rpost');
      currentLi.remove();
    });

    reviewList.querySelector('.action-btn.approve').addEventListener('click', (e) => {
      let liElement = document.createElement('li');
      liElement.setAttribute('class', 'rpost');

      liElement.innerHTML += `
      <article>
        <h4>${editTitle}</h4>
        <p>Category: ${editPostCategory}</p>
        <p>Content: ${editContentElement}</p>
      </article>
      `;

      publishedList.appendChild(liElement);
      firstliElement.remove();
    });

    clearBtn.addEventListener('click', (e) => {
      while (publishedList.hasChildNodes()) {
        publishedList.removeChild(publishedList.firstChild);
      }
    });
  });
}
