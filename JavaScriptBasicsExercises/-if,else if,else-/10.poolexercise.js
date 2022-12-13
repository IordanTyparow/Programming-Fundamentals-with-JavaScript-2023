function pool(input){
    let volume = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let water = (p1 * h) + (p2 * h);

    if (water <= volume){
        console.log(`The pool is ${(water / volume * 100).toFixed(2)}% full. Pipe 1: ${(p1 * h / water * 100).toFixed(2)}%. Pipe 2: ${(p2 * h / water * 100).toFixed(2)}%.`)
    } else {
        console.log(`For ${h} hours the pool overflows with ${water - volume} liters.`)
    }
    

}
pool(["1000", "100", "120", "3"]);