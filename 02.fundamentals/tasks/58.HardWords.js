function hardWord(input) {

    let text = input[0].split(' ');
    let words = input[1];

    text.forEach(element => {
        if (element.includes('_')) {
            let substring = element.substring(element.indexOf('_'), element.lastIndexOf('_') + 1);
            let endElement = element.substring(element.lastIndexOf('_') + 1);
            for (let word of words) {
                if (substring.length === word.length) {
                    let wordsIndex = text.indexOf(element);
                    text.splice(wordsIndex, 1, word);
                    if (endElement) {
                        text.splice(wordsIndex, 1, word + endElement);
                    }
                } 
            }
        }
    });
    console.log(text.join(' '));
}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);