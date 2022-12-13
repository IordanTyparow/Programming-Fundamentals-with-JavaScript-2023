function everest(input) {

    let index = 0;
    let command = input[index];
    index++;
    let days = 0;
    let metress = 5364;

    while (command !== "END") {

        if (command === "Yes") {
            days++;

            if (days > 5) {
                break;
            }
        } else if (command === "No") {
            days++;
        }

        let daymetress = Number(input[index]);
        index++;
        metress += daymetress;

        if (metress >= 8848) {
            break;
        }

        command = input[index];
        index++;
    }
    if (metress >= 8848) {
        console.log(`Goal reached for ${days} days!`);
    } else {
        console.log(`Failed!`);
        console.log(`${metress}`);
    }
}

everest([
"849",
"Yes",
"499",
"Yes",
"400",
"Yes",
"500",]);