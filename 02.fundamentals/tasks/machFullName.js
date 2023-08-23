function matchFullName(input) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let macth = pattern.exec(input);
    let ress = [];


    while (macth) {
        ress.push(macth[0]);
        macth = pattern.exec(input);
    }
    console.log(ress.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");