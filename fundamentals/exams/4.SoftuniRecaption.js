function softuniRecaption(input) {

    let emp1Eff = Number(input.shift());
    let emp2Eff = Number(input.shift());
    let emp3Eff = Number(input.shift());
    let people = Number(input.shift());
    let neededHours = 0;
    let answerPerHour = emp1Eff + emp2Eff + emp3Eff;


    while (people > 0) {
        people -= answerPerHour;
        neededHours++;

        if (neededHours % 4 === 0) {
            neededHours++;
        }
    }
    console.log(`Time needed: ${neededHours}h.`);
}

softuniRecaption(['5','6','4','20'])