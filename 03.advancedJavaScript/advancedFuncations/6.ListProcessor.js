function createInnerObject(array) {
    let innerCollection = [];

    function processor(array) {
        for (const el of array) {
            let [command, word] = el.split(' ');
            
            if (command === 'add') {
                innerCollection.push(word);
            } else if (command === 'remove') {
                while(innerCollection.includes(word)) {
                    let index = innerCollection.indexOf(word);
                    innerCollection.splice(index,1);
                }
            }  else {
                console.log(innerCollection.join(','));
            }
        }
    }
    return processor(array);
}

createInnerObject(['add hello', 'add again', 'remove hello', 'add again', 'print']);


