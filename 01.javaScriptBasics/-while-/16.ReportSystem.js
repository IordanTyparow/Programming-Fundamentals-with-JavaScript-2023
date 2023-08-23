function systemExam(input) {

    let money = Number(input[0]);
    let transactionCounter = 1;
    let transactioninCash = 0;
    let transactioninCard = 0;
    let cash = 0;
    let card = 0;

    let totalPrice = 0;

    let index = 1;
    let command = input[index];
    while (command !== "End") {
        let moneyNeeded = Number(command);

        if (transactionCounter % 2 === 0) {
            if (moneyNeeded < 10) {
                console.log(`Error in transaction!`);
            } else {
                console.log(`Product sold!`);
                transactioninCard += moneyNeeded;
                totalPrice += moneyNeeded;
                card++;
            }
        } else {
            if (moneyNeeded > 100) {
            console.log(`Error in transaction!`);
            } else {
                console.log(`Product sold!`);
                transactioninCash += moneyNeeded;
                totalPrice += moneyNeeded;
                cash++;
            }
        }

        if (totalPrice > money) {
            break;
        }

        transactionCounter++;
        index++;
        command = input[index];
    }

    if (totalPrice >= money) {
        let avrCash = transactioninCash / cash;
        let avrCard = transactioninCard / card;
        console.log(`Average CS: ${avrCash.toFixed(2)}`);
        console.log(`Average CC: ${avrCard.toFixed(2)}`);
    } else {
        console.log(`Failed to collect required money for charity.`);
    }

}
systemExam([
    "500",
    "120",
    "8",
    "63",
    "256",
    "78",
    "317" ]);