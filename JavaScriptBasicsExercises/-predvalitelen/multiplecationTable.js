function table(input) {

    let n = Number(input[0]);

    let first = n % 10;
    let left1 = (n - first) / 10;
    let second = left1 % 10;
    let thirdNum = (left1 - second) / 10;

    for (let i = 1; i <= first; i++) {
        for (let j = 1; j <= second; j++) {
            for (let k = 1; k <= thirdNum; k++) {
                let result = i * j * k;
                console.log(`${i} * ${j} * ${k} = ${result};`);
            }
        }
    }
}

table(["324"]);