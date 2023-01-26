function bonusScoringSystem(input) {

    let numbersOfTheStudents = Number(input.shift());
    let lectures = Number(input.shift());
    let addtitionalBonus = Number(input.shift());

    let highest = 0;
    let attendedLectures = 0;

    for (let i = 0; i < numbersOfTheStudents; i++) {
        let attendanceOfEachStudent = Number(input[i]);

        let totalBonus = Math.round(attendanceOfEachStudent / lectures * (5 + addtitionalBonus));

        if (totalBonus >= highest) {
            highest = totalBonus;
            attendedLectures = attendanceOfEachStudent;
        }
    }

    console.log(`Max Bonus: ${highest}.`);
    console.log(`The student has attended ${attendedLectures} lectures.`);
}

bonusScoringSystem([
    '5',
    '25',
    '30',
    '12',
    '19',
    '24',
    '16',
    '20'
]);