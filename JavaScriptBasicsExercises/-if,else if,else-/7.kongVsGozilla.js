function vS(input) {
    let budetForTheFilm = Number(input[0]);
    let extrascount = Number(input[1]);
    let DreesOneExtrass = Number(input[2]);
   
    let sumForDecor = budetForTheFilm * 0.1; 
    let sumForDress = extrascount * DreesOneExtrass; 
    
    if (extrascount > 150){ 
        sumForDress = sumForDress * 0.9;
    }

    let finallBugetCalc = budetForTheFilm - (sumForDecor + sumForDress)

    if (finallBugetCalc >= 0) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${finallBugetCalc.toFixed(2)} leva left.`);
    } 
     if (finallBugetCalc < 0) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${Math.abs(finallBugetCalc).toFixed(2)} leva more.`);
    }
   
}


vS(["20000","120","55.5"]);
vS(["15437.62","186","57.99"]);
vS(["9587.88","222","55.68"]);







