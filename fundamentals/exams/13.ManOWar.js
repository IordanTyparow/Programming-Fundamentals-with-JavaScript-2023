function manOwar(input) {

    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let totolHealth = Number(input.shift());

    let isvalid = (index, arr) => index >= 0 && index < arr.length;
    let pirateIndexIsvalid = (startIndex, arr, endIndex) => startIndex < arr.length && endIndex < arr.length;

    for (const commands of input) {
        let [command, ...elements] = commands.split(' ');

        if (command === 'Retire') {
            break;
        }

        if (command === 'Fire') {
            let index = Number(elements[0]);
            let damage = Number(elements[1]);
            if (isvalid(index, warShip)) {
                let attack = warShip[index] - damage;
                warShip[index] = attack;
                if (warShip[index] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    return;
                }
            }
        } else if (command === 'Defend') {
            let startIndex = Number(elements[0]);
            let endIndex = Number(elements[1]);
            let attackPower = Number(elements[2]);
            if (pirateIndexIsvalid(startIndex, pirateShip, endIndex)) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= attackPower;

                    if (pirateShip[i] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        return;
                    }
                }
            }
        } else if (command === 'Repair') {
            let index = Number(elements[0]);
            let health = Number(elements[1]);
            if (isvalid(index, pirateShip)) {
                pirateShip[index] += health;
                if (pirateShip[index] > totolHealth) {
                    pirateShip[index] = totolHealth;
                }
            }
        } else if (command === 'Status') {
            let needReapir = 0;
            for (let i = 0; i < pirateShip.length; i++) {
                if (pirateShip[i] < totolHealth * 0.20) {
                    needReapir++;
                }
            }
            console.log(`${needReapir} sections need repair.`);
        }
    }

    let totalPirateSum = 0;
    pirateShip.forEach(element => {
        totalPirateSum += element;
    });
    console.log(`Pirate ship status: ${totalPirateSum}`);

    let totalWarShipSum = 0;
    warShip.forEach(element => {
        totalWarShipSum += element;
    });
    console.log(`Warship status: ${totalWarShipSum}`);
}

manOwar([
    "12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);