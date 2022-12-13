function coins(input) {

    let coin = Number(input[0]);
    let inCoins = Math.floor(coin * 100);
    let coinCounter = 0;

    while (inCoins > 0) {
        if (inCoins >= 200) {
            inCoins = inCoins - 200;
            coinCounter++;
        } else if (inCoins >= 100) {
            inCoins = inCoins - 100;
            coinCounter++;
        } else if (inCoins >= 50) {
            inCoins = inCoins - 50;
            coinCounter++;
        } else if (inCoins >= 20) {
            inCoins = inCoins - 20;
            coinCounter++;
        } else if (inCoins >= 10) {
            inCoins = inCoins - 10;
            coinCounter++;
        } else if (inCoins >= 5) {
            inCoins = inCoins - 5;
            coinCounter++;
        } else if (inCoins >= 2) {
            inCoins = inCoins - 2;
            coinCounter++;
        } else if (inCoins >= 1) {
            inCoins = inCoins - 1;
            coinCounter++;
        }
    }
    console.log(coinCounter);
}

coins(["1.23"]);