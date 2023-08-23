function number(input) {
    
    let n = Number(input[0]);

    let current = 1;
    while (true) {
        console.log(current);
        current = (current * 2) + 1;
        
        if (current > n) {
         break;
        }
    }
}

number(["31"]);