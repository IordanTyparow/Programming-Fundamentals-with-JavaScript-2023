function schoolCamp(input) {

    let season = input[0];
    let typeGroup = input[1];
    let countChildrens = Number(input[2]);
    let countNights = Number(input[3]);

    let totalPrice = 0;
    let sport;
  
    switch (season) {
        case "Winter":
            if (typeGroup === "girls") {
                totalPrice = countChildrens * 9.60 * countNights;
                sport = "Gymnastics";
            } else if (typeGroup === "boys") {
                totalPrice = countChildrens * 9.60 * countNights;
                sport = "Judo";
            } else {
                totalPrice = countChildrens * 10 * countNights; 
                sport = "Ski";
            }
            break;
        case "Spring":
            if (typeGroup === "girls") {
                totalPrice = countChildrens * 7.20 * countNights;
                sport = "Athletics";
            } else if (typeGroup === "boys") {
                totalPrice = countChildrens * 7.20 * countNights;
                sport = "Tennis";
            } else {
                totalPrice = countChildrens * 9.50 * countNights;
                sport = "Cycling";
            }
            break;
        case "Summer": 
        if (typeGroup === "girls") {
            totalPrice = countChildrens * 15 * countNights;
            sport = "Volleyball";
        } else if (typeGroup === "boys") {
            totalPrice = countChildrens * 15 * countNights;
            sport = "Football";
        } else {
            totalPrice = countChildrens * 20 * countNights;
            sport = "Swimming";
        }
        break;
    }

    if (countChildrens >= 10 && countChildrens < 20) {
        totalPrice = totalPrice * 0.95
    } else if (countChildrens >= 20 && countChildrens < 50) {
        totalPrice = totalPrice * 0.85;
    } else if (countChildrens >= 50) {
        totalPrice = totalPrice * 0.50;
    }

    console.log(`${sport} ${totalPrice.toFixed(2)} lv.`);
}
schoolCamp(["Spring", "girls", "20", "7"]);