function login(input) {

    let username = input[0];
    let currentpassword = input[0].split('').reverse().join('');
    

    let wrongPasswords = 0;

    for (let index = 1; index < input.length; index++) {
        let passwordsTrys = input[index];

        if (passwordsTrys === currentpassword) {
            console.log(`User ${username} logged in.`);
        } else {
            wrongPasswords++;

            if (wrongPasswords === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }

            console.log('Incorrect password. Try again.');
        }
    }
}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'notsunny']);