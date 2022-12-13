function operator(input) {

    let term = input[0];
    let type = input[1];
    let internet = input[2];
    let month = Number(input[3]);

    let total = 0;
    let withIneternet = 0;
    if (term === "one") {
        if (type === "Small") {
            if (internet === "yes") {
                withIneternet = 9.98 + 5.50;
                total = withIneternet * month;
            } else if (internet === "no") {
                total = 9.98 * month;
            }
        } else if (type === "Middle") {
            if (internet === "yes") {
                withIneternet = 18.99 + 4.35;
                total = withIneternet * month;
            } else if (internet === "no") {
                total = 18.99 * month;
            }
        } else if (type === "Large") {
            if (internet === "yes") {
                withIneternet = 25.98 + 4.35;
                top = withIneternet * month;
            } else if (internet === "no") {
                total = 25.98 * month;
            }
        } else if (type === "ExtraLarge") {
            if (internet === "yes") {
                withIneternet = 35.99 + 3.85;
                total = withIneternet * month;
            } else if (internet === "no") {
                total = 25.98 * month;
            }
        }
    } else if (term === "two") {
        if (type === "Small") {
            if (internet === "yes") {
                withIneternet = 8.58 + 5.50;
                total = withIneternet * month;
            } else if (internet === "no") {
                total = 8.58 * month;
            }
        } else if (type === "Middle") {
            if (internet === "yes") {
                withIneternet = 17.09 + 4.35;
                total = withIneternet * month;
            } else if (internet === "no") {
                total = 17.09 * month;
            }
        } else if (type === "Large") {
            if (internet === "yes") {
                withIneternet = 23.59 + 4.35;
                total = withIneternet * month;
            } else if (internet === "no") {
                total = 23.59 * month;
            }
        } else if (type === "ExtraLarge") {
            if (internet === "yes") {
                withIneternet = 31.79 + 3.85;
                total = withIneternet * month;
            }else if (internet === "no") {
                total = 31.79 * month;
            }
        }
        if (term === "two") {
            total = total - (total * 3.75) / 100;
        }
    }
    console.log(`${total.toFixed(2)} lv.`);
}

operator(["two",
    "Large",
    "no",
    "10"])
