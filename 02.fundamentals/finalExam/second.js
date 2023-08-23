function bossRush(input) {
    input.shift();
    let pattern = /([|])(?<name>[A-Z]{4,})\1([\:])([\#])(?<title>[A-Za-z]+\s[A-Za-z]+)([\#])/

   

    for (const text of input) {
        if (pattern.test(text)) {
            let match = text.match(pattern);
            let name = match.groups.name;
            let strength = name.length;
            let armor = match.groups.title;
            console.log(name + ', ' + 'The ' + armor);
            console.log(`>> Strength: ${strength}`);
            console.log(`>> Armor: ${armor.length}`);
        } else {
            console.log('Access denied!');
        }
    }
}

bossRush(['3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#']);

bossRush(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#'])

