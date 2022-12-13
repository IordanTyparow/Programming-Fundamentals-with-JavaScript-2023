function grades(input) {

    let student = Number(input[0]);

    let topStudent = 0;
    let between4AND499 = 0;
    let between3AND399 = 0;
    let fail = 0;
    let average = 0;

    for (let i = 1; i <= student; i++) {
        let gradesNum = Number(input[i]);

        if (gradesNum >= 5) {
            topStudent++;
        }
        if (gradesNum >= 4 && gradesNum <= 4.99) {
            between4AND499++;
        }
        if (gradesNum >= 3 && gradesNum <= 3.99) {
            between3AND399++;
        }
        if (gradesNum < 3) {
            fail++;
        }
        average += gradesNum;
    }

    console.log(`Top students: ${((topStudent / student) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((between4AND499 / student) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((between3AND399 / student) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((fail / student) * 100).toFixed(2)}%`);
    console.log(`Average: ${(average / student).toFixed(2)}`);
}

grades(["10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5",]);