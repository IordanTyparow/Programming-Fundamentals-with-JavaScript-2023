function footbalKit(input) {

    let tShirt = Number(input[0]);
    let summ = Number(input[1]);

    let pants = tShirt * 0.75;
    let socks = pants * 0.20;

    let shoesPrice = (tShirt + pants) * 2;

    let totalPrice = tShirt + pants + socks + shoesPrice; 

    let discount = totalPrice - (totalPrice * 15) / 100;
    
    if (discount >= summ) {
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${discount.toFixed(2)} lv.`);
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(summ - discount).toFixed(2)} lv. more.`);
    }
}

footbalKit(["55", "310"]);