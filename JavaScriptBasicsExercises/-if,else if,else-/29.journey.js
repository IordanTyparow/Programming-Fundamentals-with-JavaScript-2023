function journey(input) {

    let budet = Number(input[0]);
    let season = input[1];

    if (budet <= 100) {
        console.log("Somewhere in Bulgaria");
        switch (season) {
            case "summer":
                budet = budet * 0.30;
                console.log(`Camp - ${budet.toFixed(2)}`);
                break;
            case "winter":
                budet = budet * 0.70;
                console.log(`Hotel - ${budet.toFixed(2)}`);
                break;
        }
    } else if (budet <= 1000) {
        console.log("Somewhere in Balkans");
        switch (season) {
            case "summer":
                budet = budet * 0.40;
                console.log(`Camp - ${budet.toFixed(2)}`);
                break;
            case "winter":
                budet = budet * 0.80;
                console.log(`Hotel - ${budet.toFixed(2)}`);
                break;
        }
    } else if (budet > 1000) {
        console.log("Somewhere in Europe");
        budet = budet * 0.90;
        console.log(`Hotel - ${budet.toFixed(2)}`);
    }
}



journey(["1500", "summer"]);