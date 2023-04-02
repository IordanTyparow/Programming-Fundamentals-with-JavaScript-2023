function cooking(input) {

    let buged = Number(input[0]);
    let studets = Number(input[1]);

    let freePackages = 0;
    if (studets % 5 === 0) {
        freePackages = 5;
    }

    let flourPrice = Number(input[2]);
    let eggPrice = Number(input[3]);
    let apronPrice = Number(input[4]);

    let dicount = studets + (studets * 0.20);
    
    let neededItem1 = apronPrice * Math.ceil(dicount) + (eggPrice * 10) * (studets) + flourPrice * (studets - freePackages);
    
    if (neededItem1 <= buged) {
        console.log(`Items purchased for ${neededItem1.toFixed(2)}$.`);
    } else {
        console.log(`${(neededItem1 - buged).toFixed(2)}$ more needed.`);
    }
}


    
cooking(['50', '2', '1.0', '0.10', '10.0'])
cooking(['100', '25', '4.0', '1.0', '6.0']);



    