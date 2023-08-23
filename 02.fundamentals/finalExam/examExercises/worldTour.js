function worldTour(input) {

    let text = input.shift();

    while (input[0] !== 'Travel') {
        let tokens = input[0].split(':');
        let command = tokens[0];
        let index = Number(tokens[1]);
        let string = tokens[2];
        
        if (command === 'Add Stop') {
            let firstPart = text.slice(0, index);
            let lastPart = text.slice(index);
            text = firstPart.concat(string).concat(lastPart);
            console.log(text);
        } else if (command === 'Remove Stop') {
            let endIndex = Number(tokens[2]);
            if (index >= 0 && index < text.length && endIndex >= 0 && endIndex < text.length) {
                let firstPart = text.slice(index, endIndex + 1);
                text = text.replace(firstPart, '');
            }
            console.log(text);
        } else if (command === 'Switch') {
            let oldString = tokens[1];
            let newString = tokens[2];
            text = text.replace(oldString, newString);
            console.log(text);
        }
        input.shift();
    }
    
    if (input[0] === 'Travel') {
        console.log(`Ready for world tour! Planned stops: ${text}`);
    }
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);