function bigestNumm(input) {

    let big = Number.MAX_SAFE_INTEGER;

    let index = 0;
    let start = input[index];
    let max = start; 

    while (start !== "Stop") {
        max = Number(max);
        let value = Number(start); 
        if (value > max) {
            max = value;
        }    
        index++;
        start = input[index];   
    }
    console.log(max);
}

bigestNumm(["100",
    "99",
    "80",
    "70",
    "Stop"])
