function colons(input) {

    let n = Number(input[0]);

    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let row = 1; row <= n; row++) {
        for (let colons = 1; colons <= row; colons++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger) {
            break;
        }
    }
   
}
colons(["7"]);