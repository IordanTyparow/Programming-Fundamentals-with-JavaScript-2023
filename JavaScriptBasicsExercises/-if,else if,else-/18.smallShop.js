function shop(input){

    let product = input[0];
    let town = input[1];
    let quontity = Number(input[2]);

    let price = 0;

    if (town == "Sofia"){
        if (product == "coffee"){
            price = quontity * 0.50;
            console.log(price);
        } else if (product == "water"){
            price = quontity * 0.80;
            console.log(price);
        } else if (product == "beer"){
            price = quontity * 1.20;
            console.log(price.toFixed(1));
        } else if (product == "sweets"){
            price = quontity * 1.45;
            console.log(price);
        } else if (product == "peanuts"){
            price = quontity * 1.60;
            console.log(price);
        }
    } if (town == "Plovdiv"){
        if (product == "coffee"){
            price = quontity * 0.40;
            console.log(price);
        } else if (product == "water"){
            price = quontity * 0.70;
            console.log(price.toFixed(1));
        } else if (product == "beer"){
            price = quontity * 1.15;
            console.log(price);
        } else if (product == "sweets"){
            price = quontity * 1.30;
            console.log(price);    
        } else if (product == "peanuts"){
            price = quontity * 1.50;
            console.log(price);
        }
    } if (town == "Varna") {
        if (product == "coffee"){
            price = quontity * 0.45;
            console.log(price);
        } else if (product == "water"){
            price = quontity * 0.70;
            console.log(price);
        } else if (product == "beer"){
            price = quontity * 1.10;
            console.log(price);
        } else if (product == "sweets"){
            price = quontity * 1.35;
            console.log(price);
        } else if (product == "peanuts"){
            price = quontity * 1.55;
            console.log(price);
        }
    }
}

shop(["coffee", "Varna", "2"]);