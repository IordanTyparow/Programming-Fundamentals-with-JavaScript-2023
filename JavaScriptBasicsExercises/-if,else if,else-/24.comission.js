function comission(input) {
    let town = input[0];
    let count = Number(input[1]);
    
    if (0 <= count && count <= 500) {
        switch(town){
            case "Sofia": console.log((count * 0.05).toFixed(2)); break;
            case "Varna": console.log((count * 0.045).toFixed(2));  break;
            case "Plovdiv": console.log((count * 0.055).toFixed(2)); break;
            default: console.log("error");
        }
    } else if (500 < count && count <= 1000){
        switch(town){
            case "Sofia": console.log((count * 0.07).toFixed(2)); break;
            case "Varna": console.log((count * 0.075).toFixed(2)); break;
            case "Plovdiv": console.log((count * 0.08).toFixed(2)); break;
            default: console.log("error");
        } 
    } else if (100 < count && count <= 10000){
        switch(town){
            case "Sofia": console.log((count * 0.08).toFixed(2)); break;
            case "Varna": console.log((count * 0.1).toFixed(2)); break;
            case "Plovdiv": console.log((count * 0.12).toFixed(2)); break;
            default: console.log("error");
        }
    } else if (count > 10000){
        switch(town){
            case "Sofia": console.log((count * 0.12).toFixed(2)); break;
            case "Varna": console.log((count * 0.13).toFixed(2)); break;
            case "Plovdiv": console.log((count * 0.145).toFixed(2)); break;
            default: console.log("error");
        }
    } else {
        console.log("error");
    }


}

comission(["Plovdiv", "1000"]);