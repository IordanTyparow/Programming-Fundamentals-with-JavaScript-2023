function gladiatorInventory(input) {

    let user = input.shift().split(' ');

    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(' ');

        if (commands[0] === 'Buy') {
            if (!user.includes(commands[1])) {
                user.push(commands[1]);
            }
        } else if (commands[0] === 'Trash') {
            if (user.includes(commands[1])) {
                let index = user.indexOf(commands[1]);
                user.splice(index, 1);
            }
        } else if (commands[0] === 'Repair') {
            if (user.includes(commands[1])) {
                let index = user.indexOf(commands[1]);
                user.splice(index, 1);
                user.push(commands[1]);
            }
        } else if (commands[0] === 'Upgrade') {
            let upgrade = commands[1].split('-');
            let newItem = upgrade[0] + ':' + upgrade[1];
            
            for (let i = 0; i < user.length; i++) {
                if (upgrade[0] === user[i]) {
                    user.splice(i + 1, 0, newItem);
                }
            }
        }
    }

    console.log(user.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])
