function mirrorWords(input) {

    let pattern = /(\@|\#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/gm;
    let text = input[0];
    
    let maches = [...text.matchAll(pattern)];

   let mirrorWords = [];
    
    for (let mach of maches) {
        let firstPart = mach[2];
        let secondPart = mach[3];
        let reversedWord = secondPart.split('').reverse().join('');

        if (firstPart === reversedWord) {
            mirrorWords.push(firstPart + ' <=> ' + secondPart);
        }
    }

    if (maches.length === 0) {
        console.log('No word pairs found!');
        console.log('No mirror words!');
    } else {
        console.log(`${maches.length} word pairs found!`);
        if (mirrorWords.length === 0) {
            console.log('No mirror words!');
        } else {
            console.log('The mirror words are:');
            console.log(mirrorWords.join(', '));
        }
    }
}



mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);