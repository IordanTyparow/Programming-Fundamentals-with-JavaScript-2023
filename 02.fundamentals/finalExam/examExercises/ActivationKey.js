function activationKey(input) {

    let key = input.shift();

    let command = input.shift();
    while (command !== 'Generate') {
        let tokens = command.split('>>>');
        let currentCommand = tokens[0];

        if (currentCommand === 'Slice') {
            let firstIndex = Number(tokens[1]);
            let lastIndex = Number(tokens[2]);

            let fistPart = key.slice(0, firstIndex);
            let lastPart = key.slice(lastIndex);

            key = fistPart.concat(lastPart);
            console.log(key);
        } else if (currentCommand === 'Flip') {
            if (tokens[1] === 'Upper') {
                let startIndex = Number(tokens[2]);
                let endIndex = Number(tokens[3]);

                let part = key.slice(startIndex, endIndex);
                key = key.replace(part, part.toUpperCase());
                console.log(key);
            } else {
                let startIndex = Number(tokens[2]);
                let endIndex = Number(tokens[3]);

                let part = key.slice(startIndex, endIndex);
                key = key.replace(part, part.toLowerCase());
                console.log(key);
            }
        } else if (currentCommand === 'Contains') {
            let substring = tokens[1];
            if (key.includes(substring)) {
                console.log(`${key} contains ${substring}`);
            } else {
                console.log('Substring not found!');
            }
        }

        command = input.shift();
    }
    console.log(`Your activation key is: ${key}`);
}

activationKey(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);

activationKey(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

