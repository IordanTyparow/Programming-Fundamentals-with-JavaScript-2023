function workingTime(input) {

    let hours = Number(input[0]);
    let day = input[1];

    if (hours >= 10 && hours <= 18) {
        switch(day){
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Saturday":
              console.log("open"); 
              break; 
            case "Sunday":
                console.log("closed");
                break;       
        }               
    } else {
        console.log("closed");
    } 

}    
workingTime(["11", "Sunday"]);