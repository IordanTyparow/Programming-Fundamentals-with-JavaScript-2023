function addAndRemove(array) {

    let newArray = [];

    for(let i = 0; i < array.length; i++) {
        let currentStep = array[i];

        switch(currentStep) {
            case 'add': newArray.push(i + 1); break;
            case 'remove': newArray.pop(); break;
        }
    }

    if (newArray.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArray.join(' '));
    }
}

addAndRemove(['remove', 'remove', 'remove']);