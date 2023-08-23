function argumentsInfo() {

    let obj = {};

    Array.from(arguments).forEach(x => {
        let type = typeof x;
        console.log(`${type}: ${x}`);

        if (!obj[type]) {
            obj[type] = 0;
        }
        obj[type] += 1;
    });

    Object.entries(obj)
        .sort((a, b) => b[1] - a[1])
        .forEach((x) => console.log(`${x[0]} = ${x[1]}`));
}

argumentsInfo('cat', 42, function () { console.log('Hello world!'); });