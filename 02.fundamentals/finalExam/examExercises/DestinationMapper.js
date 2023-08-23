function destinationMapper(input) {
    
    let pattern = /([=\/])(?<log>[A-Z][A-Za-z]{2,})\1/g;

    let destinations = input.match(pattern);
    let location = [];
    let travelPoints = 0;

    if (destinations !== null) {
        destinations.forEach(match => {
            let town = match.slice(1,-1);
            location.push(town);
            travelPoints += (town).length;
        });
    }

    console.log(`Destinations: ${location.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);

}

destinationMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
destinationMapper('ThisIs some InvalidInput')