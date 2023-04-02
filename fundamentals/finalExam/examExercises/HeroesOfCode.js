function heroesOfCode(input) {

    let heroes = Number(input[0]);
    let list = {};

    for (let i = 1; i <= heroes; i++) {
        let [name, health, mana] = input[i].split(' ');

        list[name] = {
            health: Number(health),
            mana: Number(mana),
        }
    }

    for (let i = heroes + 1; i <= input.length; i++) {
        let tokens = input[i].split(' - ');
        let name = tokens[1];
        let command = tokens[0];

        if (command === 'End') {
            break;
        }

        if (command === 'CastSpell') {
            let mpNeeded = Number(tokens[2]);
            let spellName = tokens[3];
            if (list[name]['mana'] >= mpNeeded) {
                list[name]['mana'] -= mpNeeded;
                console.log(`${name} has successfully cast ${spellName} and now has ${list[name]['mana']} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }
        } else if (command === 'TakeDamage') {
            let damage = Number(tokens[2]);
            let attacker = tokens[3];
            if ((list[name]['health'] - damage) > 0) {
                list[name]['health'] -= damage;
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${list[name]['health']} HP left!`);
            } else {
                console.log(`${name} has been killed by ${attacker}!`);
                delete list[name];
            }
        } else if (command === 'Recharge') {
            let amount = Number(tokens[2]);
            if ((list[name]['mana'] + amount) > 200) {
                let leftMana = Math.abs(200 - list[name]['mana']);
                list[name]['mana'] += leftMana;
                console.log(`${name} recharged for ${leftMana} MP!`);
            } else {
                list[name]['mana'] += amount;
                console.log(`${name} recharged for ${amount} MP!`);
            }
        } else if (command === 'Heal') {
            let healPotion = Number(tokens[2]);
            if ((list[name]['health'] + healPotion) > 100) {
                let recover = Math.abs(list[name]['health'] - 100);
                list[name]['health'] = 100;
                console.log(`${name} healed for ${recover} HP!`);
            } else {
                list[name]['health'] += healPotion;
                console.log(`${name} healed for ${healPotion} HP!`);
            }
        }
    }

    for (const [names, supplements] of Object.entries(list)) {
        console.log(`${names}`);
        console.log(`  HP: ${supplements['health']}`);
        console.log(`  MP: ${supplements['mana']}`);
    }
}

heroesOfCode(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);