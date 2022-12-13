function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let heigth = Number(input[2]);
    let metresHaves = width * length * heigth;

    let total = 0;

    let index = 3;
    let start = input[index];

    while (start !== "Done") {
        let moves = Number(start);
        total += moves;

        if (total > metresHaves) {
            console.log(`No more free space! You need ${total - metresHaves} Cubic meters more.`);
            break;
        }

        index++;
        start = input[index];
    }
    if (start === "Done") {
        console.log(`${metresHaves - total} Cubic meters left.`);
    }
}
moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])

