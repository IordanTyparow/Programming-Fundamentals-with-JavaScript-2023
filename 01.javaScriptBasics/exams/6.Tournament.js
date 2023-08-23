function tournament(input) {

    let day = Number(input[0]);

    let win = 0;
    let lose = 0;

    let index = 1;
    let command = input[index];

    for (let i = 1; i <= day; i++) {

        while (command !== "Finish") {
            let game = command;
            index++;
            let loseORwin = input[index];

            switch (loseORwin) {
                case "win":
                    win += 20;
                    break;
                case "lose":
                    lose = 0;
                    break;
            }
            index++;
            command = input[index];
        }
    }
}

tournament(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"]);
