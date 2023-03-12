function modernTimes(input) {

    let text = input.split(' ');
    let ress = [];

    text.forEach(element => {
        let isWordValid = element[0] === '#' && element.length > 1;
        if(isWordValid) {
            let isAllletters = true;
            for(let i = 1; i < element.length; i++) {
                let char = element[i].toLowerCase();
                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    isAllletters = false;
                    break;
                }
            }
            if (isAllletters) {
                let currentHashtag = element.substring(1, element.length);
                ress.push(currentHashtag);
            }
        }
    });

    console.log(ress.join('\n'));
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')