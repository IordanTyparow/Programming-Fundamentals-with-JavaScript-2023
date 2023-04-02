function pianist(input) {

    let catalogue = {};
    let numberOfpieses = Number(input.shift());

    for (let i = 0; i < numberOfpieses; i++) {
        let [name, composor, key] = input.shift().split('|');
        catalogue[name] = {
            composor,
            key,
        }
    }

    while (input[0] !== 'Stop') {
        let tokens = input.shift().split('|');
        let command = tokens[0];
        let name = tokens[1];

        if (command === 'Add') {
            if (catalogue[name] !== undefined) {
                console.log(`${name} is already in the collection!`);
            } else {
                catalogue[name] = {
                    composor: tokens[2],
                    key: tokens[3]
                }
                console.log(`${name} by ${tokens[2]} in ${tokens[3]} added to the collection!`);
            }
        } else if (command === 'Remove') {
            if (catalogue[name] == undefined) {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            } else {
                delete catalogue[name];
                console.log(`Successfully removed ${name}!`);
            }
        } else if (command === 'ChangeKey') {
            if (catalogue[name] === undefined) {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            } else {
                catalogue[name].key = tokens[2];
                console.log(`Changed the key of ${name} to ${tokens[2]}!`);
            }
        }
    }

    let sorted = Object.entries(catalogue).sort((a,b) => {
        let aName = a[0];
        let bName = b[0];
        
        let aComposer = a[1];
        let bComposer = b[1];

        return aName.localeCompare(bName) || aComposer.localeCompare(bComposer)
    });

   
        for (const [name, peace] of Object.entries(catalogue)) {
            console.log(`${name} -> Composer: ${peace.composor}, Key: ${peace.key}`);
        }
    
}

pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
  