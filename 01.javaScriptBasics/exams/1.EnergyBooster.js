function energy(input) {

    let fruit = input[0];
    let saze = input[1];
    let count = Number(input[2]);

    let total = 0;
    let totalPrice = 0;
    if (fruit === "Watermelon") {
        if (saze === "big") {
            total = 5 * 28.70;
            totalPrice = count * total;
        } else if (saze === "small") {
            total = 2 * 56;
            totalPrice = count * total;
        }
    } else if (fruit === "Mango") {
        if (saze === "big") {
            total = 5 * 19.60;
            totalPrice = count * total;
        } else if (saze === "small") {
            total = 2 * 36.66;
            totalPrice = count * total;
        }
    } else if (fruit === "Pineapple") {
        if (saze === "big") {
            total = 5 * 24.80;
            totalPrice = count * total;
        } else if (saze === "small"){
            total = 2 * 42.10;
            totalPrice = count * total;
        }
    } else if (fruit === "Raspberry") {
        if (saze === "big") {
            total = 5 * 15.20;
            totalPrice = count * total;
        } else if (saze === "small") {
            total = 2 * 20;
            totalPrice = count * total;
        }
    }


    let discount = 0;

    if (totalPrice >= 400 && totalPrice <= 1000) {
        discount = totalPrice * 0.15;
    } else if (totalPrice > 1000) {
        discount = totalPrice * 0.50;
    }

    let finalPrice = totalPrice - discount

    console.log(`${(finalPrice).toFixed(2)} lv.`);
}

energy([
    "Raspberry",
    "small",
    "50"]);
