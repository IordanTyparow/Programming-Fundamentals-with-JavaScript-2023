function easterTrip(input) {

    let destination = input[0];
    let date = input[1];
    let countNights = Number(input[2]);

    if (destination === "Germany") {
        if (date === "21-23") {
            countNights = countNights * 32;
        } else if (date === "24-27") {
            countNights = countNights * 37;
        } else if (date === "28-31") {
            countNights = countNights * 43;
        }
    } else if (destination === "Italy") {
        if (date === "21-23") {
            countNights = countNights * 28;
        } else if (date === "24-27") {
            countNights = countNights * 32;
        } else if (date === "28-31") {
            countNights = countNights * 39;
        }
    } else if (destination === "France") {
        if (date === "21-23") {
            countNights = countNights * 30;
        } else if (date === "24-27") {
            countNights = countNights * 35;
        } else if (date === "28-31") {
            countNights = countNights * 40;
        }
    }
    console.log(`Easter trip to ${destination} : ${countNights.toFixed(2)} leva.`);
}

easterTrip(["France",
"28-31",
"8"])


