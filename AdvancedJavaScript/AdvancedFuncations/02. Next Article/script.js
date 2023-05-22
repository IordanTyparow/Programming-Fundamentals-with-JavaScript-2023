function getArticleGenerator(articles) {
    
    return () => {
        let resultField = document.getElementById('content');
        let article = document.createElement('article');

        if (articles.length > 0) {
            let text = articles.shift();
            article.innerText = text;
            resultField.appendChild(article);            
        }
    }
}
