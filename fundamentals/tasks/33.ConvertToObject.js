function convertToObcject(json) {

    let convert = JSON.parse(json);

    for (const key of Object.keys(convert)) {
        console.log(`${key}: ${convert[key]}`);
    }

}

convertToObcject('{"name": "George", "age": 40, "town": "Sofia"}');