function validate() {

    document.querySelector("#submit").type = "button";
    let patternForUsername = /^[A-Za-z0-9]{3,20}$/;
    let patternForPassword = /^[\w]{5,15}$/;
    let patternForEmail = /^[^@.]+@[^@]*\.[^@]*$/;

    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');
    let company = document.getElementById('company');

    let companyInfo = document.getElementById('companyInfo');
    let companyNumber = document.getElementById('companyNumber');
    let validDiv = document.getElementById('valid');
    let button = document.getElementById('submit');

    let validOut = [];

    company.addEventListener('change', (e) => {
        if (company.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    });

    button.addEventListener('click', (e) => {
        e.preventDefault();

        if (patternForUsername.exec(username.value) === null) {
            username.style.borderColor = 'red';
            validOut.push(false);
        } else {
            username.style.border = 'none';
            validOut.push(true);
        }

        if (password.value === confirmPassword.value &&
            patternForPassword.exec(confirmPassword.value) != null &&
            patternForPassword.exec(password.value) != null) {
            password.style.border = 'none';
            confirmPassword.style.border = 'none';
            validOut.push(true);
        } else {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            validOut.push(false);
        }

        if (patternForEmail.exec(email.value) === null) {
            email.style.borderColor = 'red';
            validOut.push(false);
        } else {
            email.style.border = 'none';
            validOut.push(true);
        }

        if (company.checked) {
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = 'red';
                validOut.push(false);
            } else {
                companyNumber.style.border = 'none';
                validOut.push(true);
            }
        }

        if (!validOut.includes(false)) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }
    });
}
