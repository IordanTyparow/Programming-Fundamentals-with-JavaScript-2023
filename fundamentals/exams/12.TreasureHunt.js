function treasureHunt(input) {

    let treasureInventory = input.shift().split('|');
    let isvalid = (index, arr) => index >= 0 && index < arr.length;
    let total = 0;

    for (const line of input) {
        let [command, ...elements] = line.split(' ');

        if (command === 'Yohoho') {
            break;
        }

        if (command === 'Loot') {
            for (const items of elements) {
                if (!treasureInventory.includes(items)) {
                    treasureInventory.unshift(items);
                }
            }
        } else if (command === 'Drop') {
           let index = Number(elements[0]);
            if (isvalid(index, treasureInventory)) {
                let dropped = treasureInventory.splice(index, 1);
                treasureInventory.push(...dropped);
            }
        } else if (command === 'Steal') {
            let index = Number(elements[0]);
            let stealedItems = treasureInventory.slice(-index);
            treasureInventory.splice(-index);
            console.log(stealedItems.join(', '));
        }
    }

    total = treasureInventory.reduce((sum, treasureInventory) => sum + treasureInventory.length, 0) / treasureInventory.length;

    if (treasureInventory.length > 0) {
        console.log(`Average treasure gain: ${total.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])

