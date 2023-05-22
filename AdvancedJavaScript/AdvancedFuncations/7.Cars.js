function solve(array) {
    let cars = {};

    function closure(array) {
        for (const el of array) {
            let [command, name] = el.split(' ');

            if (command === 'create') {
                if (!cars.hasOwnProperty(name)) {
                    cars[name] = [];
                }
            } else if (command === 'set') {
                let elements = el.split(' ');
                cars[name].push(`${elements[2]}:${elements[3]}`);
            }
        }
        for (const el of array) {
            let tokens = el.split(' ');
            let inheritEl = tokens[2];
            let inheritName = tokens[3];

            if (tokens[0] === 'print') {
                console.log(cars[tokens[1]].join(','));
            }

            if (inheritEl === 'inherit') {
                let ress = '';
                cars[inheritName].forEach(element => {
                    ress += `${element},`;
                });
                cars[tokens[1]].push(`${ress.substring(0, ress.length - 1)}`);
            }
        }
    }
    return closure(array);
}

solve(['create c1','create c2 inherit c1',
'set c1 color red','set c2 model new','print c1','print c2']);

solve(['create pesho','create gosho inherit pesho','create stamat inherit gosho','set pesho rank number1','set gosho nick goshko','print stamat']);