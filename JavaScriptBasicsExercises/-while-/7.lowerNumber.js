function lower(input) {
    
    let index = 0;
    let command = input[index];
    let lower = command;

    while (command !== "Stop") {
        lower = Number(lower);
        let value = Number(command);
        if (value < lower) {
            lower = value;
        }
        index++
        command = input[index];
    }
    console.log(lower);
}

lower(["100",
    "99",
    "80",
    "70",
    "Stop"
]);