function minerTask(input) {

    let chest = {};

    for (let i = 0; i < input.length; i += 2) {
        let item = input[i];
        let quantity = Number(input[i + 1]);

        if (!chest.hasOwnProperty(item)) {
            chest[item] = [];
            chest[item].push(quantity);
        } else {
            let sum = 0;
            for (const el of chest[item]) {
                sum += el + quantity;
            }
            chest[item] = [sum];

        }
    }

    for (const [item, quantity] of Object.entries(chest)) {
        console.log(`${item} -> ${quantity}`);
    }
}

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
)