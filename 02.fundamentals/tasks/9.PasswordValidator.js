function passwordValidator(password) {

    let digitCounter = 0;
    let isSymble = false;

    for (let index = 0; index < password.length; index++) {
        let char = password[index].charCodeAt();
        
        let isDigit = char >= 48 && char <= 57;
        let isSmallestChar = char >= 97 && char <= 122;
        let isBiggestChar = char >= 65 && char <= 90;

        if (isDigit) {
            digitCounter++;
        }

        if (!isDigit && !isBiggestChar && !isSmallestChar) {
            isSymble = true;
        }
    }
    
    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (isSymble) {
        console.log('Password must consist only of letters and digits');
    }

    if (digitCounter < 2) {
        console.log('Password must have at least 2 digits');
    } 

    if (!isSymble && digitCounter >= 2 && password.length >= 6 && password.length <= 10) {
        console.log('Password is valid');
    }

}

passwordValidator('logIn');