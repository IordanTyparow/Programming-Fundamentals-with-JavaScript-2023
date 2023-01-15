function carWash(commands) {
    
    let arrayLength = commands.length;
    let increase = 0;
    
    for (let index = 0; index < arrayLength; index++) {

        let currentCommand = commands[index];

        switch (currentCommand) {
            case 'soap': increase = increase + 10; break;
            case 'water': increase = increase + (increase * 0.20); break;
            case 'vacuum cleaner': increase = increase + (increase * 0.25); break;
            case 'mud': increase = increase - (increase * 0.10); break;
        }
    }
    console.log(`The car is ${increase.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap','water']);