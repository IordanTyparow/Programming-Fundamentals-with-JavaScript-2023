class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error('Not enough space in the cellar.');
        }
        this.wines.push({ wineName, wineType, price, paid: false });
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const wine = this.wines.find(x => x.wineName === wineName);

        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (wine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        } else {
            this.bill += price;
            wine.paid = true;
            return `You bought a ${wineName} for a ${price}$.`;
        }
    }

    openBottle(wineName) {
        const wine = this.wines.find(x => x.wineName === wineName);

        if (!wine) {
            throw new Error('The wine, you\'re looking for, is not found.');
        }

        if (!wine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        } else {
            let index = this.wines.indexOf(wine);
            this.wines.splice(index, 1);
            return `You drank a bottle of ${wineName}.`;
        }
    }

    cellarRevision(wineType) {
        if (!wineType) {
            let result = [];
           let sortedWines = this.wines.sort((a,b) => a.wineName.localeCompare(b.wineName));
            result.push(`You have space for ${this.space - this.wines.length} bottles more.`);
            result.push(`You paid ${this.bill}$ for the wine.`);
            sortedWines.map(x => {
                let paid = x.paid ? 'Has Paid' : 'Not Paid';
                result.push(`${x.wineName} > ${x.wineType} - ${paid}.`);
            });

            return result.join('\n').trim();
        } else {
            let findType = this.wines.find(x => x.wineType === wineType);

            if (findType) {
                let result = [];
                let pain = findType ? 'Has Paid' : 'Not Paid';
                result.push(`${findType.wineName} > ${findType.wineType} - ${pain}.`);
                return result.join('/n').trim();
            } else {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }
        }
    }
}

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision(''));



