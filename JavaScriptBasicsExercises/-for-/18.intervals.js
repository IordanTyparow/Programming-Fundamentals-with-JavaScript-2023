function intervals(input) {

    let moves = Number(input[0]);

    let score = 0;

    let from09 = 0;
    let from1019 = 0;
    let from2029 = 0;
    let from3039 = 0;
    let from4050 = 0;
    let invalidNumber = 0;

    for (let i = 1; i < input.length; i++) {
        let totalMoves = Number(input[i]);
       
        if (totalMoves >= 0 && totalMoves <= 9) {
            from09++;
            score += totalMoves * 0.2;
        }else if (totalMoves >= 10 && totalMoves <= 19) {
            from1019++;
            score += totalMoves * 0.3;
        } else if (totalMoves >= 20 && totalMoves <= 29) {
            from2029++;
            score += totalMoves * 0.40;
        } else if (totalMoves >= 30 && totalMoves <= 39) {
            from3039++;
            score += 50;
        } else if (totalMoves >= 40 && totalMoves <= 50) {
            from4050++;
            score += 100;
        } else {
            invalidNumber++;
            score = score / 2;
        }
        
    }
    let firstNum = (from09 / moves) * 100;
    let secondtNum = (from1019 / moves) * 100;
    let thirtNum = (from2029 / moves) * 100;
    let fourthNum = (from3039 / moves) * 100;
    let fivethNum = (from4050 / moves) * 100;
    let sixthNum = (invalidNumber / moves) * 100;
   
    console.log((score).toFixed(2));
    console.log(`From 0 to 9: ${firstNum.toFixed(2)}%`);
    console.log(`From 10 to 19: ${secondtNum.toFixed(2)}%`);
    console.log(`From 20 to 29: ${thirtNum.toFixed(2)}%`);
    console.log(`From 30 to 39: ${fourthNum.toFixed(2)}%`);
    console.log(`From 40 to 50: ${fivethNum.toFixed(2)}%`);
    console.log(`Invalid numbers: ${sixthNum.toFixed(2)}%`);
}
intervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"])