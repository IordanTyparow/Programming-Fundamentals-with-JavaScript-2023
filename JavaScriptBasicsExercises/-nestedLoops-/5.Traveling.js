function travel(input) {

    let destination = input[0];
    let buged = Number(input[1]);

    let saving = 0;
    let index = 1;

    while (destination !== "End") {
        index++;
        
        while (saving < buged) {
            saving += Number(input[index]);
            index++;
        }
        console.log(`Going to ${destination}!`);
        destination = input[index++];
        buged = Number(input[index]);
        saving = 0;    
    }

}

travel(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"])



