function hotelRoom(input) {

    let mounth = input[0];
    let nights = Number(input[1]);

    studioPrice = 0;
    apartmentsPrice = 0;

    switch(mounth){
        case "May":
        case "October":
            studioPrice = 50 * nights;
            apartmentsPrice = 65 * nights;
            if (nights > 7 && nights <= 14){
                studioPrice = studioPrice * 0.95;
            } else if (nights > 14){
                studioPrice = studioPrice * 0.70;
            }            
            break;
        case "June":
        case "September":
            studioPrice = 75.20 * nights;
            apartmentsPrice = 68.70 * nights;
            if (nights > 14){
                studioPrice = studioPrice * 0.80;
            } 
            break;
        case "July":
        case "August":
            studioPrice = 76 * nights;
            apartmentsPrice = 77 * nights;
            break;
        }
    
        if (nights > 14){
            apartmentsPrice = apartmentsPrice * 0.90;
        }
    console.log(`Apartment: ${(apartmentsPrice).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice).toFixed(2)} lv.`);
}




hotelRoom(["October", "15"]);








