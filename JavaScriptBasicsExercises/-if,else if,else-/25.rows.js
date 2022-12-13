function cinema(input){
    
    let type = input[0];
    let lines = Number(input[1]);
    let columns = Number(input[2]);

    let total = 0;

    if (type == "Premiere"){
        total = lines * columns * 12;
    } else if (type == "Normal"){
        total = lines * columns * 7.50;
    } else if (type == "Discount"){
        total = lines * columns * 5;
    }
    console.log(`${total.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"]);