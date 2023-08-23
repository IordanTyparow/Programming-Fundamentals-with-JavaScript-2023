function wars(input) {

    let name = input[0];
    let name1 = input[1];

    let firstPlayer = 0;
    let secondPlayer = 0;

    let totalPointsOne = 0;
    let totalPointsTwo = 0;

    let index = 2;
    let command = input[index];
    while (command !== "End of game") {
        let points = Number(command);
        index++;
        let point2 = Number(input[index]);

        if (points > point2) {
            totalPointsOne += Math.abs(points - point2);
            firstPlayer = totalPointsOne;
        } else if (point2 > points) {
            totalPointsTwo += Math.abs(points - point2);
            secondPlayer = totalPointsTwo;
        }
        if (points === point2) {
            console.log(`Number wars!`);
            index++;
            let card = Number(input[index]);
            index++;
            let card2 = Number(input[index]);
            if (card > card2) {
                console.log(`${name} is winner with ${firstPlayer} points`);
            } else {
                console.log(`${name1} is winner with ${secondPlayer} points`);
            }
            return;
        }
        index++;
        command = input[index];
    }
    console.log(`${name} has ${firstPlayer} points`);
    console.log(`${name1} has ${secondPlayer} points`);
}

wars(["Desi",
"Niki",
"7",
"5",
"3",
"4",
"3",
"3",
"5",
"3"])

