function shop(input) {

    let product = input[0];
    let dayONweek = input[1];
    let qontity = Number(input[2]);

    let price = 0;

    if (dayONweek == "Monday" || dayONweek == "Tuesday" || dayONweek == "Wednesday"
        || dayONweek == "Thursday" || dayONweek == "Friday") {
                if (product == "banana"){
                    price = qontity * 2.50;
                    console.log(price.toFixed(2));
                } else if (product == "apple"){
                    price = qontity * 1.20;
                    console.log(price.toFixed(2));
                } else if (product == "orange"){
                    price = qontity * 0.85;
                    console.log(price.toFixed(2));
                } else if (price == "grapefruit"){
                    price = qontity * 1.45;
                    console.log(price.toFixed(2));
                } else if (product == "kiwi"){
                    price = qontity * 2.70;
                    console.log(price.toFixed(2));
                } else if (product == "pineapple"){
                    price = qontity * 5.50;
                    console.log(price.toFixed(2));
                } else if (product == "grapes"){
                    price = qontity * 3.85;
                    console.log(price.toFixed(2));
                } else {
                    console.log("error");
                }      
    } else if (dayONweek == "Saturday" || dayONweek == "Sunday"){
                if (product == "banana"){
                    price = qontity * 2.70;
                    console.log(price.toFixed(2));
                } else if (product == "apple") {
                    price = qontity * 1.25;
                    console.log(price.toFixed(2));
                } else if (product == "orange"){
                    price = qontity * 0.90;
                    console.log(price.toFixed(2));
                } else if (product == "grapefruit"){
                    price = qontity * 1.60;
                    console.log(price.toFixed(2));
                } else if (product == "kiwi"){
                    price = qontity * 3.00;
                    console.log(price.toFixed(2));
                } else if (product == "pineapple"){
                    price = qontity * 5.60;
                    console.log(price.toFixed(2));
                } else if (product == "grapes"){
                    price = qontity * 4.20;
                    console.log(price.toFixed(2));
                } else {
                    console.log("error");
                }
        } else {
            console.log("error");
        }
}
shop(["tomato", "Monday", "0.5"]);