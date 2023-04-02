function pirates(input) {

    let cities = {};
    let settlements = 0;

    let command = input.shift();
    while (command !== 'Sail') {
        let tokens = command.split('||');
        let city = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);

        if (cities.hasOwnProperty(city)) {
            cities[city]['population'] += population;
            cities[city]['gold'] += gold;
        } else {
            settlements++;
            cities[city] = {
                population: population,
                gold: gold,
            }
        }

        command = input.shift();
    }

    let endCommand = input.shift();
    while (endCommand !== 'End') {
        let tokens = endCommand.split('=>');
        let command = tokens[0];
        let city = tokens[1];

        if (command === 'Plunder') {
            let population = Number(tokens[2]);
            let gold = Number(tokens[3]);

            cities[city]['population'] -= population;
            cities[city]['gold'] -= gold;
            console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);

            if (cities[city]['population'] <= 0 || cities[city]['gold'] <= 0) {
                settlements--;
                console.log(`${city} has been wiped off the map!`);
                delete cities[city];
            }
        } else if (command === 'Prosper') {
            let gold = Number(tokens[2]);
            if (gold >= 0) {
                cities[city]['gold'] += gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${cities[city]['gold']} gold.`);
            } else {
                console.log(`Gold added cannot be a negative number!`);
            }
        }

        endCommand = input.shift();
    }
    if (settlements > 0) {
        console.log(`Ahoy, Captain! There are ${settlements} wealthy settlements to go to:`);
        for (const [name, supplements] of Object.entries(cities)) {
            console.log(`${name} -> Population: ${supplements['population']} citizens, Gold: ${supplements['gold']} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}

pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);

