function animal(input){

    let animalType = input[0];
    
    switch(animalType){
        case "dog":
            console.log("mammal");
            break;
        case "snake":
        case "crocodile":
        case "tortoise":        
            console.log("reptile");
            break;
        default:
            console.log("unknown");
            break;        
    }
}

animal(["dog"]);