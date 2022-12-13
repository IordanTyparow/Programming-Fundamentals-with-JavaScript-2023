function gradation(input) {

    let student = input[0];

    let index = 1;
    let total = 0;
    let fails = 0;
    
    while (index < 12) {
        let grade = Number(input[index]);

        if (grade < 4.00) {
            fails++;
        } else if (grade >= 4.00) {
            index++;
            total += grade;
        }
        
        if (fails >= 2) {
            console.log(`${student} has been excluded at ${index} grade`);
            break;
        }
    }

    let average = total / 12;

    if (average >= 4.00) {
        console.log(`${student} graduated. Average grade: ${average.toFixed(2)}`);
    } 

}
gradation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])









