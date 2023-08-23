function generation(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);

    let f1 = Math.floor(start / 1000);  
    let f2 = Math.floor(start / 100) % 10;   
    let f3 = Math.floor(start / 10) % 10;
    let f4 = start % 10;

    let e1 = Math.floor(end / 1000);
    let e2 = Math.floor(end / 100) % 10;
    let e3 = Math.floor(end / 10) % 10;
    let e4 = end % 10;
    
    let string = "";
    
    for (let i = f1; i <= e1 ; i++) {
        for (let j = f2; j <= e2; j++) {
            for (let k = f3; k <= e3; k++) {
                for (let l = f4; l <= e4; l++) {
                    if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
                        string += `${i}${j}${k}${l} `
                    }
                }
            }
        }
    }
    console.log(string);
}

generation(["2345", "6789"]);
