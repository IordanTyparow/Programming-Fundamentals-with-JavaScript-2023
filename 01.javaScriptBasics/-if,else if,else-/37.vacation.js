function vacation(input) {

    let buget = Number(input[0]);
    let season = input[1];

    if (season === "Summer") {
        if (buget <= 1000) {
            let alaska = buget * 0.65;
            console.log(`${"Alaska"} - ${"Camp"} - ${alaska.toFixed(2)}`);
        }
    } else if (season === "Winter") {
        if (buget <= 1000) {
            let morocco = buget * 0.45;
            console.log(`${"Morocco"} - ${"Camp"} - ${morocco.toFixed(2)}`);
        }
    }

    if (season === "Summer") {
        if (buget > 1000 && buget <= 3000) {
            let alaska = buget * 0.80;
            console.log(`${"Alaska"} - ${"Hut"} - ${alaska.toFixed(2)}`);
        }
    } else if (season === "Winter") {
        if (buget > 1000 && buget <= 3000) {
            let morocco = buget * 0.60;
            console.log(`${"Morocco"} - ${"Hut"} - ${morocco.toFixed(2)}`);
        }
    } 
    
    if (season === "Summer" || season === "Winter") {
        if (buget > 3000 && season === "Winter") {
        let totalPrice = buget * 0.90;
        console.log(`${"Morocco"} - ${"Hotel"} - ${totalPrice.toFixed(2)}`);
        } else if (buget > 3000 && season === "Summer") {
            let totalPrice = buget * 0.90;
            console.log(`${"Alaska"} - ${"Hotel"} - ${totalPrice.toFixed(2)}`);
        }
    }
}

vacation(["5000", "Summer"]);