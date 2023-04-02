function fancyBarcodes(input) {

    
    let pattern = /(@#+)([A-Z][a-zA-Z0-9]{4,}[A-Z])(@#+)/;
    let dig = /\d/;

    input.shift();

    input.forEach(barcode => {
        if (pattern.test(barcode)) {
            let productGroup = [...barcode]
            .filter(char => dig.test(char))
            .join('');
            
            if (productGroup.length > 0) {
                console.log(`Product group: ${productGroup}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log(`Invalid barcode`);
        }
    });

}

fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);


fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])
