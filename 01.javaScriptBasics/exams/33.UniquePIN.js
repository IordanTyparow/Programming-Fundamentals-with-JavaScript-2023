function cinemaVoucher(input) {
    let index = 0;
    let command = Number(input[index]);
    index++;
    let name = input[index];
    
    let totalPoints = 0;

    while (command !== "Stop") {
        let points = Number(command);
        index++;

        totalPoints += points;
       
        command = input[index];
    }
    
}

cinemaVoucher(["2", "Dani", "2", "Stop"]);