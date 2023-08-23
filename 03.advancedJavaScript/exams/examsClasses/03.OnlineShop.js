class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace <= spaceRequired) {
            throw new Error('Not enough space in the warehouse.');
        }

        this.products.push({ product, quantity });
        this.warehouseSpace -= spaceRequired;

        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        let findProduct = this.products.find(x => x.product === product);

        if (!findProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        if (minimalQuantity <= findProduct.quantity) {
            return `You have enough from product ${product}.`;
        }

        let difference = Math.abs(findProduct.quantity - minimalQuantity);
        findProduct.quantity = minimalQuantity;

        return `You added ${difference} more from the ${product} products.`;
    }

    sellProduct(product) {
        let findProduct = this.products.find(x => x.product === product);

        if (!findProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        findProduct.quantity -= 1;

        let quantity = product.quantity;
        this.sales.push({ product, quantity });

        return `The ${product} has been successfully sold.`;
    }

    revision() {
        let result = [];

        if (this.sales.length === 0) {
            throw new Error('There are no sales today!');
        }

        result.push(`You sold ${this.sales.length} products today!`);
        result.push('Products in the warehouse:');

        this.products.forEach(x => {
            result.push(`${x.product}-${x.quantity} more left`);
        });

        return result.join('\n');
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());



