function oskri(input) {

    let nameActior = input[0];
    let poit = Number(input[1]);
    let judgeCount = Number(input[2]);

    let totalPrice = poit;
       
    for (let i = 3; i < input.length  ; i+= 2 ) {
        let nameJudge = Number(input[i].length);
        let poits = Number(input[i + 1]);
        let total = (nameJudge * poits) / 2;
        totalPrice += total;       
        if (totalPrice > 1250.5){
            break;
        }      
    }

    if (totalPrice > 1250.5) {
        console.log(`Congratulations, ${nameActior} got a nominee for leading role with ${totalPrice.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${nameActior} you need ${(1250.5 - totalPrice).toFixed(1)} more!`);
    }
   
}
oskri(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])






