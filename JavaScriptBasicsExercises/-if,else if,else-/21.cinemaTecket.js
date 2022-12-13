function cinemaTickets(input) {

    let dayOFtheWeek = input[0];
    
    switch(dayOFtheWeek) {
        case "Monday":
        case "Tuesday":
        case "Friday":    
            console.log("12");
            break;
        case "Wednesday":
        case "Thursday":
            console.log("14");
            break;
        case "Saturday":
        case "Sunday":
            console.log("16");        
    }
}

cinemaTickets(["Sunday"]);