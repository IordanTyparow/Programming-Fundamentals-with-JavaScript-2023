function worldRecord(input) {
          
    let tournaments = Number(input[0]);
    let points = Number(input[1]);
    let wins = 0;
    let startpoint = points;

    for (let index = 2; index < input.length; index++) {
        let stage = input[index];

        switch(stage) {
            case "W": 
            startpoint += 2000;
            wins++;                     
            break;
            case "F": 
            startpoint += 1200; 
            break;
            case "SF": 
            startpoint += 720; 
            break;      
        }
    }
    let avg = (startpoint - points) / tournaments;
   console.log(`Final points: ${startpoint}`);
   console.log(`Average points: ${Math.floor(avg)}`);
   console.log(`${((wins / tournaments) * 100).toFixed(2)}%`);
}               

worldRecord(["5", 
"1400",
"F",
"SF",
"W",
"W",
"SF"]);
