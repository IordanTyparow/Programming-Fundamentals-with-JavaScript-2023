function jump(input) {

    let neddedMetres = Number(input[0]);
    
    let index =  1;

    let startingHeight = neddedMetres - 30;
    let attemps = 0;
    let jumps = 0;

    while (startingHeight <= neddedMetres) {
        let tempResult = Number(input[index]);
        
        if (tempResult > startingHeight) {
            startingHeight += 5;
            attemps = 0;
        } else {
            attemps++;
        }
        jumps++;
        if (attemps === 3) {
            break;
        }

        index++;
    }

    if (attemps === 3) {
        console.log(`Tihomir failed at ${startingHeight}cm after ${jumps} jumps.`);
    } else {
        console.log(`Tihomir succeeded, he jumped over ${neddedMetres}cm after ${jumps} jumps.`);
    }
}
 
jump(["231",
    "205",
    "212",
    "213",
    "228",
    "229",
    "230",
    "235"]);
