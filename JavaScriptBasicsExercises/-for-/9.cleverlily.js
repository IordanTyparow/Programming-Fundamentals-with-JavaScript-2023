function lily(input) {

    let lilyAge = Number(input[0]);
    let woshingMachine = Number(input[1]);
    let countToy = Number(input[2]);

    let toys = 0;
    let money = 0;
    let stolemoney = 0;
    let addmoney = 10;

    for (let age = 1; age <= lilyAge; age++) {
        if (age % 2 === 0) {
            money += addmoney;
            addmoney += 10;
            stolemoney++;
        } else {
            toys++;
        }
    }
    let moneyFromToys = countToy * toys;
    let savedMoney = moneyFromToys + money - stolemoney;

     if (savedMoney >= woshingMachine) {
        console.log(`Yes! ${(savedMoney - woshingMachine).toFixed(2)}`);
     } else {
        console.log(`No! ${(woshingMachine - savedMoney).toFixed(2)}`)
     }
}

lily(["21",
"1570.98",
"3"])
