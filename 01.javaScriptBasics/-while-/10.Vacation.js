function vacation(input) {

    let moneyNedded = Number(input[0]);
    let haveMoney = Number(input[1]);

    let days= 0;
    let spendMoney = 0;
    let index = 2;
    let currentInput = input[index];
    
    while (currentInput < moneyNedded) {
        days++;

        if (currentInput === "spend") {
            spendMoney++;
            

            if (spendMoney === 5) {
                console.log(`You can't save the money.`);
                console.log(days);
                break;
            }
            let moneyToSpent = Number(input[index]);
            haveMoney = haveMoney - moneyToSpent;
            if (haveMoney < 0) {
                haveMoney = 0;
            }
        } else if (currentInput === "save") {
            spendMoney = 0;
            let moneyToSave = Number(input[index]);
            haveMoney = haveMoney + moneyToSave;
        }
        index++;
        currentInput = input[index];
    }
    console.log(haveMoney)
}

vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"]);
