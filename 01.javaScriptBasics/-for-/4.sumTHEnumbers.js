function summNumbers(input) {
    
    let n = input[0];
    let totalValue = 0;

    for (let i = 0; i < n.length; i++) {
        let numm = Number(n[i]);
        totalValue += numm;
    }
    console.log("The sum of the digits is:" + totalValue);
}

summNumbers(["564891"]);