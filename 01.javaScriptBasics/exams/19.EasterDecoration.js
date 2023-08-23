function easterDecoration(input) {

    let index = 0;
    let easterBread = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let point = 0;
    let localPoints = 0;
    let counter = 0;
    let bestchef = "";
    let bestScore = 0;

    for (let i = 0; i < easterBread; i++) {
        counter++;
        point = 0;
        let chef = command;
        command = input[index];
        index++;

        while (command !== "Stop") {
            localPoints = Number(command);
            point += localPoints;

            command = input[index];
            index++;
        }
        

        if (counter === 1) {
            console.log(`${chef} has ${point} points.`)
        } else {
            console.log(`${chef} has ${point} points.`)
        }
        if (point > bestScore) {
            bestScore = point;
            bestchef = chef;
            console.log(`${chef} is the new number 1!`);
        }
        command = input[index];
        index++;
    }
    console.log(`${bestchef} won competition with ${bestScore} points!`);
}

easterDecoration([
    "3",
    "Chef Manchev",
    "10",
    "10",
    "10",
    "10",
    "Stop",
    "Natalie",
    "8",
    "2",
    "9",
    "Stop",
    "George",
    "9",
    "2",
    "4",
    "2",
    "Stop"]);





