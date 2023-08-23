class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        quantity = Number(quantity);

        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error("This article model is not included in this gallery!");
        }

        let article = this.listOfArticles.find((x) => { return x.articleName === articleName && x.articleModel === articleModel.toLowerCase() });

        if (article) {
            article.quantity += quantity;
        } else {
            articleModel = articleModel.toLowerCase();
            this.listOfArticles.push({ articleModel, articleName, quantity })
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        let currGuest = this.guests.find(x => x.guestName === guestName);

        if (currGuest) {
            throw new Error(`${guestName} has already been invited.`);
        }

        let points = 0;

        if (personality === 'Vip') {
            points = 500;
        } else if (personality === 'Middle') {
            points = 250;
        } else {
            points = 50;
        }

        this.guests.push({ guestName, points, purchaseArticle: 0 });
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let currGuest = this.listOfArticles.find(x => x.articleName === articleName && x.articleModel === articleModel.toLowerCase());
        let currPoints = this.guests.find(x => x.guestName === guestName);

        if (!currGuest) {
            throw new Error(`This article is not found.`);
        }

        if (currGuest.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        if (!currPoints) {
            return 'This guest is not invited.';
        }

        let neededPoints = Number(this.possibleArticles[articleModel.toLowerCase()]);
        let userPoints = Number(currPoints.points);

        if (neededPoints <= userPoints) {
            currPoints.points -= neededPoints;
            currGuest.quantity -= 1;
            currPoints.purchaseArticle += 1;
        } else {
            return 'You need to more points to purchase the article.';
        }

        return `${guestName} successfully purchased the article worth ${neededPoints} points.`;
    }

    showGalleryInfo(criteria) {
        if (criteria === 'article') {
            let result = ['Articles information:'];
            this.listOfArticles.forEach(x => result.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`));
            return result.join('\n');
        } else if (criteria === 'guest') {
            let result = ['Guests information:'];
            this.guests.forEach(x => result.push(`${x.guestName} - ${x.purchaseArticle}`));
            return result.join('\n');
        }
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));






