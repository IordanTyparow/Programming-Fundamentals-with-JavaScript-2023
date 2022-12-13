function newHouse(input) {

    let flower = input[0];
    let countFlower = Number(input[1]);
    let budet = Number(input[2]);

    let totalPrice = 0;

    switch (flower) {
        case "Roses":
            totalPrice = countFlower * 5;
            if (countFlower > 80) {
                totalPrice = totalPrice * 0.90;
            }
            break;
        case "Dahlias":
            totalPrice = countFlower * 3.80;
            if (countFlower > 90) {
                totalPrice = totalPrice * 0.85;
            }
            break;
        case "Tulips":
            totalPrice = countFlower * 2.80;
            if (countFlower > 80) {
                totalPrice = totalPrice * 0.85;
            }
            break;
        case "Narcissus":
            totalPrice = countFlower * 3;
            if (countFlower < 120) {
                totalPrice = totalPrice * 1.15;
            }
            break;
        case "Gladiolus":
            totalPrice = countFlower * 2.50;
            if (countFlower < 80) {
                totalPrice = totalPrice * 1.20;
            }
            break;
    }
    if (budet >= totalPrice) {
        totalPrice = budet - totalPrice;
        console.log(`Hey, you have a great garden with ${countFlower} ${flower} and ${totalPrice.toFixed(2)} leva left.`);
    } else {
        totalPrice = totalPrice - budet;
        console.log(`Not enough money, you need ${totalPrice.toFixed(2)} leva more.`);
    }

}

newHouse(["Tulips", "88", "260"]);
newHouse(["Roses", "55", "250"]);
newHouse(["Narcissus", "119", "360"]);