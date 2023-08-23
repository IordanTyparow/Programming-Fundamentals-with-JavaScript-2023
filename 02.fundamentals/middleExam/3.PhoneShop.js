function phoneshop(input) {

    let phoneList = input.shift().split(', ');

    let index = 0;
    let command = input[index];
    while (command !== 'End') {
        let currentCommand = command.split(' - ');

        let commands = currentCommand[0];
        let phone = currentCommand[1];

        if (commands === 'Add') {
            if (phoneList.includes(phone)) {
                index++;
                command = input[index];
                continue;
            }
            phoneList.push(phone);
        } else if (commands === 'Remove') {
            if (phoneList.includes(phone)) {
                let index = phoneList.indexOf(phone);
                phoneList.splice(index, 1);
            }
        } else if (commands === 'Bonus phone') {
            let phones = currentCommand[1].split(':');
            let oldPhone = phones[0];
            let newPhone = phones[1];
            if (phoneList.includes(oldPhone)) {
                let index = phoneList.indexOf(oldPhone);
                phoneList.splice(index + 1, 0, newPhone);
            } else {
                break;
            }
        } else if (commands === 'Last') {
            if (phoneList.includes(phone)) {
                let index = phoneList.indexOf(phone);
                phoneList.splice(index, 1);
                phoneList.push(phone);
            }
        }
        index++;
        command = input[index];
    }

    console.log(phoneList.join(', '));
}

phoneshop(["SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End"])








