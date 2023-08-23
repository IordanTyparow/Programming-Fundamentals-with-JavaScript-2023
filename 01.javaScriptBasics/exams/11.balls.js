function balls(input) {

    let balls = Number(input[0]);

    let totalBalls = 0;
    
    let otherColorsPicket = 0;
    let dividesByBlackBalls = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;


    for (let i = 1; i <= balls; i++) {
        let countBalls = input[i];
    
        if (countBalls === "red") {
            totalBalls = totalBalls + 5;
            redBalls++;
        } else if (countBalls === "orange") {
            totalBalls = totalBalls + 10;
            orangeBalls++;
        } else if (countBalls === "yellow") {
            totalBalls = totalBalls + 15;
            yellowBalls++;
        } else if (countBalls === "white") {
            totalBalls = totalBalls + 20;
            whiteBalls++;
        } else if (countBalls === "black") {
            totalBalls = Math.floor(totalBalls / 2)
            dividesByBlackBalls++;
        } else {
            otherColorsPicket++;
        }
    }

    console.log(`Total points: ${totalBalls}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherColorsPicket}`);
    console.log(`Divides from black balls: ${dividesByBlackBalls}`);
}

balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])

