function bestPlayers(input) {

    let maxScore = 0;
    let best = "";

    let index = 0;
    let command = input[index];
    while (command !== "END") {
        let name = command;
        index++;
        let score = Number(input[index]);

        if (score > maxScore) {
            maxScore = score;
            best = name;
        }
        if (maxScore >= 10) {
            break;
        }
        index++;
        command = input[index];
    }
    console.log(`${best} is the best player!`);
    if (maxScore >= 3) {
        console.log(`He has scored ${maxScore} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxScore} goals.`);
    }
}

bestPlayers([
    "Neymar",
    "2",
    "Ronaldo",
    "1",
    "Messi",
    "3",
    "END"]);
