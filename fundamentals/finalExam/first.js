function stringGame(input) {

    let text = input.shift();

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(' ');
        let command = tokens[0];

        if (command === 'Done') {
            break;
        }

        if (command === 'Change') {
            let oldString = tokens[1];
            let newString = tokens[2]
            while(text.includes(oldString)) {
                text = text.replace(oldString,newString);
            }
            console.log(text);
        } else if (command === 'Includes') {
            let string = tokens[1];
            if (text.includes(string)) {
                console.log('True');
            } 
        } else if (command === 'End') {
            let endString = tokens[1];
            if (text.endsWith(endString)) {
                console.log('True');
            } else {
                console.log('false');
            }
        } else if (command === 'Uppercase') {
            text = text.toUpperCase();
            console.log(text);
        } else if (command === 'FindIndex') {
            let char = tokens[1];
            let indexOf = text.indexOf(char);
            console.log(indexOf);  
        } else if (command === 'Cut') {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let end = text.slice(startIndex);
            let endCommand = end.slice(end, endIndex);
            console.log(endCommand);
        }
    }
}

stringGame(["*S0ftUni is the B3St Plac3**",
"Change 2 o",
"Includes best",
"End is",
"Uppercase",
"FindIndex P",
"Cut 3 7",
"Done"])

