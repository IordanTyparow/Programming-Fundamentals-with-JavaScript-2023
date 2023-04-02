function wildZoo(input) {

    let list = {};
    let areaList = {};

    for (let text of input) {
        let curCommand = text.split(' ')[0];
        if (curCommand === 'EndDay') {
            break;
        }
        let command = text.split(' ');
        let currentAnimal = command[1].split('-');


        if (curCommand === 'Add:') {
            let name = currentAnimal[0];
            let food = Number(currentAnimal[1]);
            let area = currentAnimal[2];
            if (!list.hasOwnProperty(name)) {
                list[name] = {
                    food: food,
                    area: area,
                    currArea: 0,
                }
            } else {
                list[name]['food'] += food;
            }
        } else if (curCommand === 'Feed:') {
            let name = currentAnimal[0];
            let food = Number(currentAnimal[1]);

            if (list.hasOwnProperty(name)) {
                list[name]['food'] -= food;
                if (list[name]['food'] <= 0) {
                    console.log(`${name} was successfully fed`);
                    list[name]['currArea'] -= 1;
                    delete list[name];
                }
            }
        }
    }
    console.log('Animals:');
    for (const [name, food] of Object.entries(list)) {
        console.log(` ${name} -> ${food['food']}g`);
    }

    for (const [name, supplements] of Object.entries(list)) {
        if (!areaList.hasOwnProperty(supplements['area'])) {
            areaList[supplements['area']] = 0;
        }
        if (areaList.hasOwnProperty(supplements['area'])) {
            areaList[supplements['area']] += 1;
        }
    }
    
    console.log('Areas with hungry animals:');
    for (const [name, supplements] of Object.entries(areaList)) {
        console.log(`${name}: ${supplements}`);
    }
}

wildZoo(["Add: Jamie-600-WaterfallArea",
"Add: Maya-6570-WaterfallArea",
"Add: Adam-4500-ByTheCreek",
"Add: Bobbie-6570-WaterfallArea",
"Feed: Jamie-2000",
"Feed: Adam-2000",
"Feed: Adam-2500",
"EndDay"])





