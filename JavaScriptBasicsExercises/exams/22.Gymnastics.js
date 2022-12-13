function gymnastics(input) {

    let coutry = input[0];
    let aplliance = input[1];


    let total = 0;
    let grade = 0;

    if (coutry === "Bulgaria") {
        if (aplliance === "ribbon") {
            total = 9.600 + 9.400;
            grade = 20 - total;
        } else if (aplliance === "hoop") {
            total = 9.550 + 9.750;
            grade = 20 - total;
        } else if (aplliance === "rope") {
            total = 9.500 + 9.400;
            grade = 20 - total;
        }
    } else if (coutry === "Russia") {
        if (aplliance === "ribbon") {
            total = 9.100 + 9.400;
            grade = 20 - total;
        } else if (aplliance === "hoop") {
            total = 9.300 + 9.800;
            grade = 20 - total;
        } else if (aplliance === "rope") {
            total = 9.600 + 9.000;
            grade = 20 - total;
        }
    } else if (coutry === "Italy") {
        if (aplliance === "ribbon") {
            total = 9.200 + 9.500;
            grade = 20 - total;
        } else if (aplliance === "hoop") {
            total = 9.450 + 9.350;
            grade = 20 - total;
        } else if (aplliance === "rope") {
            total = 9.700 + 9.150;
            grade = 20 - total;
        }
    }
    let pointNedded = (grade / 20) * 100;

    console.log(`The team of ${coutry} get ${total.toFixed(3)} on ${aplliance}.`);
    console.log(`${pointNedded.toFixed(2)}%`);        
}

gymnastics(["Russia",
"rope"])
