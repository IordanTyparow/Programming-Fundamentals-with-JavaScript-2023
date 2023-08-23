function past(input) {

    let money = Number(input[0]);
    let yearstoAlive = Number(input[1]);
    let year = 18;
    let moneyNededd = 0;

    for(let i = 1800; i <= yearstoAlive; i++) {
        if (i % 2 === 0) {
            moneyNededd += 12000;
        } else {
            moneyNededd += 12000 + (year * 50);
        }
        year++;
    }
    if (money >= moneyNededd) {
        console.log(`Yes! He will live a carefree life and will have ${(money - moneyNededd).toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${(moneyNededd - money).toFixed(2)} dollars to survive.`);
    }
}

past(["50000", "1802"]);