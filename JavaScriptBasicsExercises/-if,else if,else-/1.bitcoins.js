function bitCoin(input) {
    let countBitcoins = Number(input[0]);
    let chinaiona = Number(input[1]);
    let comision = Number(input[2]);
    
    let oneBticoin = countBitcoins * 1168;
    let euro = 1.95;
    let count5iona = chinaiona * 0.15;
    let count2dolara = count5iona * 1.76;
    let totalPrice = (oneBticoin + count2dolara) / euro;

    let comisionSum = (totalPrice * comision) / 100;
    let result = totalPrice - comisionSum;
    console.log(result.toFixed(2));
}

bitCoin(["1", "5", "5"]);
bitCoin(["20", "5678", "2.4"]);
bitCoin(["7", "50200.12", "3"]);