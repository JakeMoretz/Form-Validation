const submitBtn = document.querySelector('.submit');

function validateEmail() {
    const emailInput = document.querySelector('#email');
    const emailMsg = document.querySelector('.email-msg');

    if (emailInput.validity.valueMissing) {
        document.querySelector('.input1').style.outline = '1px solid red';
        emailMsg.textContent = 'Must Enter Valid Email Address';
    }
    if (emailInput.validity.typeMismatch) {
        document.querySelector('.input1').style.outline = '1px solid red';
        emailMsg.textContent = 'Must Enter Valid Email Address';
    }
    if (emailInput.validity.tooShort) {
        document.querySelector('.input1').style.outline = '1px solid red';
        emailMsg.textContent = `Email should be at least ${email.minLength} characters`;
    } else if (emailInput.validity.valid) {
        document.querySelector('.input1').style.outline =
            '1px solid rgb(0, 0, 0, 0.3)';
        emailMsg.textContent = '';
    }
}

function validateCountry() {
    const countryInput = document.querySelector('#country');
    const countryMsg = document.querySelector('.country-msg');

    if (countryInput.validity.valueMissing) {
        document.querySelector('.input2').style.outline = '1px solid red';
        countryMsg.textContent = 'Must Enter A Country';
    } else {
        document.querySelector('.input2').style.outline =
            '1px solid rgb(0, 0, 0, 0.3)';
        countryMsg.textContent = '';
    }
}

function validateZip() {
    const zipInput = document.querySelector('#zip');
    const zipMsg = document.querySelector('.zip-msg');

    if (zipInput.validity.valueMissing) {
        document.querySelector('.input3').style.outline = '1px solid red';
        zipMsg.textContent = 'Must Enter Zip Code';
    }
    if (zipInput.validity.tooShort) {
        document.querySelector('.input3').style.outline = '1px solid red';
        zipMsg.textContent = 'Must Enter A Proper Zip Code';
    }
    if (zipInput.validity.tooLong) {
        document.querySelector('.input3').style.outline = '1px solid red';
        zipMsg.textContent = 'Must Enter A Proper Zip Code';
    }
    if (zipInput === NaN) {
        document.querySelector('.input3').style.outline = '1px solid red';
        zipMsg.textContent = 'Must Enter A Proper Zip Code';
    } else if (zipInput.validity.valid) {
        document.querySelector('.input3').style.outline =
            '1px solid rgb(0, 0, 0, 0.3)';
        zipMsg.textContent = '';
    }
}

function validatePassword() {
    let passInput = document.querySelector("#password");
    const passMsg = document.querySelector(".password-msg");

    if (passInput.validity.valueMissing) {
        document.querySelector('.input4').style.outline = '1px solid red';
        passMsg.textContent = "Must Enter Password";
    } if (passInput.validity.tooShort) {
        document.querySelector('.input4').style.outline = '1px solid red';
        passMsg.textContent = "Password Is Too Short";
    } if (passInput.validity.tooLong) {
        document.querySelector('.input4').style.outline = '1px solid red';
        passMsg.textContent = "Password Is Too Long";
    } else if (passInput.validity.valid) {
        document.querySelector('.input4').style.outline =
        '1px solid rgb(0, 0, 0, 0.3)';
        passMsg.textContent = '';
    }
}

// function validateConfirmPass() {
//     let passInput = document.querySelector("#password");
//     const confirmPass = document.querySelector("#confirm-pass");
//     // const confirmP = document.querySelector("#confirm-pass");
//     const confirmPassMsg = document.querySelector(".confirm-pass-msg");

//     if (confirmPass.validity.valueMissing) {
//         document.querySelector('.input5').style.outline = '1px solid red';
//         confirmPassMsg.textContent = "Must Confirm Password";
//     } if (confirmPass.value !== passInput.value) {
//         document.querySelector('.input5').style.outline = '1px solid red';
//         confirmPassMsg.textContent = "Confirm Password";
//     } else if (confirmPass.value === passInput.value) {
//         document.querySelector('.input5').style.outline =
//         '1px solid rgb(0, 0, 0, 0.3)';
//         confirmPassMsg.textContent = '';
//     }
// }

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    validateEmail();
    validateCountry();
    validateZip();
    validatePassword();
    // validateConfirmPass();
});
