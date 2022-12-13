function maniA(input) {
    let countGroups = Number(input[0]);

    let mysala = 0;
    let monblan = 0;
    let klimangjaro = 0;
    let k2 = 0;
    let everest = 0;

    let total = 0;

    for (let i = 1; i <= countGroups; i++) {
        let participants = Number(input[i]);
        total += participants;

        if (participants <= 5) {
            mysala += participants ;
        } else if (participants >= 6 && participants <= 12) {
            monblan += participants;
        } else if (participants >= 13 && participants <= 25) {
            klimangjaro += participants;
        } else if (participants >= 26 && participants <= 40) {
            k2 += participants;
        } else if (participants >= 41) {
            everest += participants;
        }
    }
    mysala = (mysala / total) * 100;
    monblan = (monblan / total) * 100;
    klimangjaro = (klimangjaro / total) * 100;
    k2 = (k2 / total) * 100;
    everest = (everest / total) * 100;
    
    console.log(`${(mysala).toFixed(2)}%`);
    console.log(`${(monblan).toFixed(2)}%`);
    console.log(`${(klimangjaro).toFixed(2)}%`);
    console.log(`${(k2).toFixed(2)}%`);
    console.log(`${(everest).toFixed(2)}%`);
}
maniA(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);