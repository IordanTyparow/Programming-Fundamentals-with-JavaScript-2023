function genders(input) {
     
    let age = Number(input[0]);
    let gender = input[1];
    
    if (gender == "f"){
        if (age < 16){
            console.log("Miss");
        } else if (age >= 16){
            console.log("Ms.");
        }
    } else if (gender == "m"){
        if (age >= 16){
            console.log("Mr.");
        } else if (age < 16){
            console.log("Master");
        }
    } 
        
}

genders(["12", "f"]);
genders(["17", "m"]);
genders(["25", "f"]);
genders(["13.5", "m"]);