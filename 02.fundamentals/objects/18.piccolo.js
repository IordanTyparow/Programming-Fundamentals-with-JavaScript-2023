function piccolo(array) {

    let parking = {};

    array.forEach(element => {
        let [command, carNum] = element.split(', ');
        
        if (command === 'IN') {
            parking[carNum] = '';
        } else {
            delete parking[carNum];
        }
    });

    let sort = Object.keys(parking).sort((a,b) => a.localeCompare(b));

    for (const key of sort) {
        console.log(`${key}`);
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);