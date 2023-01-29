function towns(input) {
    
    let result = {};

    input.forEach(el => {
        let [town, latitude, longitude] = el.split(' | ');

        result.town = town;
        result.latitude = Number(latitude).toFixed(2);
        result.longitude = Number(longitude).toFixed(2);
        
        console.log(result)
    });

}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);