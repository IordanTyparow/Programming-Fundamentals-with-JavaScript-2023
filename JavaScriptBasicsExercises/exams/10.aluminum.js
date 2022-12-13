function aluminum(input) {

    let joinery = Number(input[0]);
    let type = input[1];
    let delivery = input[2];

    let price = 0;
    let discount = 0;
    
    if (joinery <= 10) {
        console.log(`Invalid order`);
    } else if (joinery > 10) {
        switch (type) {
            case "90X130":
                price = joinery * 110;
                if (joinery > 60) {
                    discount = price * 0.92;
                } else if (joinery > 30) {
                    discount = price * 0.95;
                } else {
                    discount = price;
                }
                break;
            case "100X150":
                price = joinery * 140;
                if (joinery > 80) {
                    discount = price * 0.90;
                } else if (joinery > 40) {
                    discount = price * 0.94;
                } else {
                    discount = price;
                }
                break;
            case "130X180":
                price = joinery * 190;
                if (joinery > 50) {
                    discount = price * 0.88;
                } else if (joinery > 20) {
                    discount = price * 0.93;
                } else {
                    discount = price;
                }
                break;
            case "200X300":
                price = joinery * 250;
                if (joinery > 50) {
                    discount = price * 0.86;
                } else if (joinery > 25) {
                    discount = price * 0.91;
                } else {
                    discount = price;
                }
                break;
        }
        if (delivery === "With delivery") {
            discount = discount + 60;
        }
    
        if (joinery > 99) {
            discount = discount * 0.96;
        }
        console.log(`${discount.toFixed(2)} BGN`);
    }
}
aluminum(["2",
"130X180",
"With delivery"])




