function eggBattle(input) {

    let firstPlayer = Number(input[0]);
    let secondPlayer = Number(input[1]);

    let index = 2;
    let command = input[index];

    while (command !== "End") {
        let type = command;

        switch (type) {
            case "one": secondPlayer -= 1; break;
            case "two": firstPlayer -= 1; break;
        }

        if (firstPlayer <= 0) {
            console.log(`Player one is out of eggs. Player two has ${secondPlayer} eggs left.`);
            return;
        } else if (secondPlayer <= 0) {
            console.log(`Player two is out of eggs. Player one has ${firstPlayer} eggs left.`);
            return;
        }

        index++;
        command = input[index];
    }

    console.log(`Player one has ${firstPlayer} eggs left.`);
    console.log(`Player two has ${secondPlayer} eggs left.`);

}

eggBattle([
    "6",
    "3",
    "one",
    "two",
    "two",
    "one",
    "one"
]);
