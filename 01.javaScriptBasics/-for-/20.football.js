function football(input) {

    let stadion = Number(input[0]);
    let fans = Number(input[1]);

    let a = 0;
    let b = 0;
    let v = 0;
    let g = 0;

    for (let i = 2; i <= input.length; i++) {
        let count = input[i];
        
        switch(count) {
            case "A":
                a++;
                break;
            case "B":
                b++;
                break;
            case "V":
                v++;
                break;
            case "G": 
                g++;
                break;           
        }
    }

    let aGroupPercent = ( a / fans ) * 100;
    let bGroupPercent = ( b / fans ) * 100;
    let vGroupPercent = ( v / fans ) * 100;
    let gGroupPercent = ( g / fans ) * 100;
    let allPercent = (fans / stadion) * 100;
    
    console.log(`${(aGroupPercent).toFixed(2)}%`);
    console.log(`${(bGroupPercent).toFixed(2)}%`);
    console.log(`${(vGroupPercent).toFixed(2)}%`);
    console.log(`${(gGroupPercent).toFixed(2)}%`);
    console.log(`${(allPercent).toFixed(2)}%`);
}

football([
    "76",
    "10",
    "A",
   "V",
    "V",
    "V",
    "G",
    "B",
    "A",
    "V",
    "B",
    "B"
    ]);