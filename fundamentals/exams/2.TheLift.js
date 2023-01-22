function lift(input) {

    let people = Number(input.shift());
    let wagons = input.shift().split(' ');
    let wagonSpaceCount = 0;

    let emptySlots = false;

    for (let i = 0; i < wagons.length; i++) {

        let currentWagon = Number(wagons[i]);

        if (currentWagon < 4) {
            if (people >= 4) {
                if (currentWagon != 0) {
                    people -= (4 - currentWagon);
                    currentWagon = 4;
                    wagons[i] = currentWagon;
                    emptySlots = false;
                } else {
                    currentWagon = 4;
                    people -= currentWagon;
                    wagons[i] = currentWagon;
                }
            } else {
                currentWagon += people;
                people = 0;
                wagons[i] = currentWagon;
                emptySlots = true;
            }
        }
    }

    if (people != 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(wagons.join(' '));
    } else {

        for (const wagon of wagons) {
            if (wagon === 4) {
                wagonSpaceCount++;
            }
        }

        if (wagonSpaceCount != wagons.length){
            console.log('The lift has empty spots!');
            console.log(wagons.join(' '));
        } else {
            console.log(wagons.join(' '));
        }

    }
}

lift([
    "20",
    "0 0 0 0 0"
]);
