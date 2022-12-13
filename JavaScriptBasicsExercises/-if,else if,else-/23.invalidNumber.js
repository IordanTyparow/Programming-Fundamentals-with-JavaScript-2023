function invalidNumber(input) {

    let invalidNumm = Number(input[0]);

    if ((invalidNumm < 100 || invalidNumm > 200) && (invalidNumm != 0)) {
        console.log("invalid");
    }
}

invalidNumber(["0"]);