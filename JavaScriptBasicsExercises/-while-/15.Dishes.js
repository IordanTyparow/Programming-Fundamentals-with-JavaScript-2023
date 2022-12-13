function dishwasher(input) {

    let preparationCount = Number(input[0]);

    let preparation = preparationCount * 750;

    let index = 1;
    let pots = 0;
    let dishes = 0;

    while (input[index] !== "End") {
        let dish = Number(input[index]);
        let mlNeededd = 0;

        if (index % 3 === 0) {
            mlNeededd = dish * 15;
            pots += dish;
        } else {
            mlNeededd = dish * 5;
            dishes += dish;
        }

        preparation -= mlNeededd;

        if (preparation < 0) {
            console.log(`Not enough detergent, ${Math.abs(preparation)} ml. more necessary!`);
            return;
        }

        index++;

    }
    console.log(`Detergent was enough!`);
    console.log(`${dishes} dishes and ${pots} pots were washed.`);
    console.log(`Leftover detergent ${preparation} ml.`);

}

dishwasher([
    "1",
    "10",
    "15",
    "10",
    "12",
    "13",
    "30",]);


