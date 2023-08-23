function cake(input) {

    let length = Number(input[0]);
    let wength = Number(input[1]);
    let totalCake = length * wength;
    
    let index = 2;
    let takenPices = input[index];
    while (takenPices !== "STOP") {
        takenPices = Number(takenPices);
        totalCake -= takenPices;
       
        if (totalCake < 0) {
            console.log(`No more cake left! You need ${Math.abs(totalCake)} pieces more.`);
            break;
        }

        index++;
        takenPices = input[index];
    }
    if (takenPices === "STOP") {
        console.log(`${totalCake} pieces are left.`);
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

