function hospital(input) {

    let days = Number(input[0]);

    let treatedPatiets = 0;
    let unTreatedPatiets = 0;

    let doctors = 7;
    
    for (let i = 1; i <= days; i++) {
        let currentDaysPatients = Number(input[i]);

        if (i % 3 === 0) {
            if (unTreatedPatiets > treatedPatiets) {
                doctors++;
            }
        }

        if (doctors < currentDaysPatients) {
            treatedPatiets += doctors;
            unTreatedPatiets += currentDaysPatients - doctors;
        } else {
            treatedPatiets += currentDaysPatients;
        }
        

    }

    console.log(`Treated patients: ${treatedPatiets}.`);
    console.log(`Untreated patients: ${unTreatedPatiets}.`);

}

hospital(["4", "7", "27", "9", "1"]);