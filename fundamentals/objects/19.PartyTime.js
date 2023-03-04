function partyTime(array) {

    let partyList = {
        'vip': [],
        'regualer': [],
    };

    let partyTime = array.shift();

    while(partyTime !== 'PARTY') {
        let char = partyTime[0];
        if(!isNaN(char)) {
            partyList['vip'].push(partyTime);
        } else {
            partyList['regualer'].push(partyTime);
        }
        partyTime = array.shift();
    }

    array.forEach(name => {
        if (partyList['vip'].includes(name)) {
            let index = partyList['vip'].indexOf(name);
            partyList['vip'].splice(index, 1);
        } else if (partyList['regualer'].includes(name)) {
            let index = partyList['regualer'].indexOf(name);
            partyList['regualer'].splice(index, 1);
        }
    });

    console.log(partyList['vip'].length + partyList['regualer'].length);
    
    for (const vipGuest of partyList['vip']) {
        console.log(vipGuest);
    }
    for (const regualer of partyList['regualer']) {
        console.log(regualer);
    }
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);