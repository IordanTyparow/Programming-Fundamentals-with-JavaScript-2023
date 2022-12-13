function ski(input) {

    let days = Number(input[0]);
    let typeRoom = input[1];
    let points = input[2];

    let night = days - 1;
    let finalPrice = 0;
    
    switch(typeRoom){
        case "room for one person": finalPrice = night * 18; break;
        case "apartment": 
            finalPrice = night * 25;
            if (night < 10){
                finalPrice = finalPrice * 0.70;
            } else if (night > 10 && night <= 15) {
                finalPrice = finalPrice * 0.65;
            } else if (night > 15) {
                finalPrice = finalPrice * 0.50;
            }
            break;
        case "president apartment":  
        finalPrice = night * 35;
        if (night < 10){
            finalPrice = finalPrice * 0.90;
        } else if (night > 10 && night <= 15) {
            finalPrice = finalPrice * 0.85;
        } else if (night > 15) {
            finalPrice = finalPrice * 0.80;
        }
        break;      
    }
    if (points === "positive") {
        finalPrice = finalPrice * 1.25;
    } else {
        finalPrice = finalPrice * 0.90;
    }
    console.log(finalPrice.toFixed(2));
}

ski(["2",
"apartment",
"positive"])













