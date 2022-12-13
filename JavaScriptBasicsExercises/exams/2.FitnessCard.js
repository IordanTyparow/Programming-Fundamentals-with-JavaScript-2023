function fitnessCard(input) {

    let summ = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let card = 0;

    switch (gender) {
        case "m":
            if (sport === "Gym") {
                card = 42;
                if (age <= 19) {
                    card = card * 0.80;
                }
            } else if (sport === "Boxing") {
                card = 41;
                if (age <= 19) {
                    card = card * 0.80;
                }
            } else if (sport === "Yoga") {
                card = 45;
                if (age <= 19) {
                    card = card * 0.80;
                }
            } else if (sport === "Zumba") {
                card = 34;
                if (age <= 19) {
                    card = card * 0.80;
                }
            } else if (sport === "Dances") {
                card = 51;
                if (age <= 19) {
                    card = card * 0.80;
                }
            } else if (sport === "Pilates") {
                card = 39;
                if (age <= 19) {
                    card = card * 0.80;
                }
            }
            break;
        case "f":
            if (sport === "Gym") {
                card = 35;
                if (age <= 19) {
                    card = card * 0.80;
                }
            } else if (sport === "Boxing") {
                card = 41;
                if (age <= 19) {
                    card = card * 0.80;
                }
            } else if (sport === "Yoga") {
                card = 42;
                if (age <= 19) {
                    card = card * 0.80;
                }
            } else if (sport === "Zumba") {
                card = 34;
                if (age <= 19) {
                    card = card * 0.80;
                }
            } else if (sport === "Dances") {
                card = 51;
                if (age <= 19) {
                    card = card * 0.80;
                }
            } else if (sport === "Pilates") {
                card = 39;
                if (age <= 19) {
                    card = card * 0.80;
                }
            }
            break;
    }
    if (summ > card) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        let diff = card - summ;
        console.log(`You don't have enough money! You need $${(diff).toFixed(2)} more.`);
    }
}
fitnessCard(["20",
    "f",
    "15",
    "Yoga"])




