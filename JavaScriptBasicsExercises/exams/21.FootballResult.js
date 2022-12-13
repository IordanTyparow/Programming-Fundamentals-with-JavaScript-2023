function result(input) {
   
    let win = 0;
    let lose = 0;
    let equal = 0;
    
    for (let i = 0; i < input.length; i++) {
        let matchScore1 = input[i].substring(0, 1);
        let matchScore2 = input[i].substring(2, 3);

        if (matchScore1 > matchScore2) {
            win++;
        } else if (matchScore1 < matchScore2) {
            lose++;
        } else {
            equal++;
        }
    }

    console.log(`Team won ${win} games.`);
    console.log(`Team lost ${lose} games.`);
    console.log(`Drawn games: ${equal}`);
}

result(["0:2",
"0:1",
"3:3"])


