function meeting(input) {
    
    let meeting = {};

    input.forEach(line => {
        let tokens = line.split(' ');
        let weekDay = tokens[0];
        let name = tokens[1];
        
        if (meeting.hasOwnProperty(weekDay)) {
            console.log(`Conflict on ${weekDay}!`);
        } else {
            meeting[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`);
        }
    });

    for (const [keys, values] of Object.entries(meeting)) {
        console.log(`${keys} -> ${values}`);
    }
}

meeting(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);