function carMarket(input) {

    let buget = Number(input[0]);
    let season = input[1];

    if (season === "Summer") {
        if (buget <= 100) {
            console.log("Economy class");
            let cabrio = buget * 0.35;
            console.log(`${"Cabrio"} - ${cabrio.toFixed(2)}`);
        } 
    }  else if (season === "Winter") {
        if (buget <= 100) {
            console.log("Economy class");
            let jeep = buget * 0.65;
            console.log(`${"Jeep"} - ${jeep.toFixed(2)}`);
        }
    } 

    if (season === "Summer") {
        if (buget > 100 && buget <= 500) {
            console.log("Compact class");
            let cabrio = buget * 0.45;
            console.log(`${"Cabrio"} - ${cabrio.toFixed(2)}`);
        }
    }  else if (season === "Winter") {
        if (buget > 100 && buget <= 500) {
            console.log("Compact class");
            let jeep = buget * 0.80;
            console.log(`${"Jeep"} - ${jeep.toFixed(2)}`);
        }
    } 
    if (season === "Summer" || season === "Winter") {
        if (buget > 500) {
        console.log("Luxury class");
        let jeep = buget * 0.90;
        console.log(`${"Jeep"} - ${jeep.toFixed(2)}`);
       }
    }
            
}

carMarket(["1010", "Winter"]);