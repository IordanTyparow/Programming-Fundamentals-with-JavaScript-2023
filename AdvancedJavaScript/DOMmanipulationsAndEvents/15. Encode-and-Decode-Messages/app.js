function encodeAndDecodeMessages() {
    
    document.getElementById('main').addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            return;
        }

        let enCodeMessage = document.getElementsByTagName('textarea')[0];
        let deCodeMessage = document.getElementsByTagName('textarea')[1];
    
        if (e.target.textContent.includes('Encode')) {
            let message = enCodeMessage.value;
            let encode = [];

            for (let i = 0; i < message.length; i++) {
                let currentSymble = message.charCodeAt(i);
                encode.push(String.fromCharCode(currentSymble + 1));
            }

            enCodeMessage.value = '';
            deCodeMessage.value = encode.join('');
        } else if (e.target.textContent.includes('Decode')) {
            let message = deCodeMessage.value;
            let decode = [];

            for (let i = 0; i < message.length; i++) {
                let currentSymble = message.charCodeAt(i);
                decode.push(String.fromCharCode(currentSymble - 1));
            }

            deCodeMessage.value = decode.join('');
        }
    });
}