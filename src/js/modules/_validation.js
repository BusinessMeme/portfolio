const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById('email');
const emailError = document.querySelector('.error_email');
const name = document.getElementById('name');
const nameError = document.querySelector('.name_error');
const privacy = document.querySelector('#check');
const policy = document.querySelector('.contacts__policy');
const text = document.querySelector('#name');


function emailInputValid() {
    if (email.validity.valid || email.validity.valueMissing) {
        emailError.textContent = '';
        email.classList.remove('input_invalid');
    }
}
function nameInputValid() {
    if (name.validity.valid || name.validity.valueMissing) {
        nameError.textContent = '';
        name.classList.remove('input_invalid');
    }
}

function mySubmitValid () {
    if (!email.validity.valid) {
        showError();
        return false;
    } else {
        emailError.textContent = '';
        email.classList.remove('input_invalid');
    }

    if (!name.validity.valid) {
        showError();
        return false;
    } else {
        nameError.textContent = '';
        name.classList.remove('input_invalid');
    }

    if(!privacy.checked) {
        showError();
        return false;
    } else {
        showError();
    }

    return true;
}

function privacyClick() {
    return showError();
}

function showError() {
    if(email.validity.valueMissing) {
        emailError.textContent = 'Введите емейл аддрес';
        email.classList.add('input_invalid');
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Введенное значение должно быть емейл аддресом';
        email.classList.add('input_invalid');
    } else if (email.validity.tooShort) {
        emailError.textContent = `Емеёл должен содержать минимум ${ email.minLength } символов; Вы ввели ${ email.value.length }.`;
        email.classList.add('input_invalid');
    }
    
    if(name.validity.valueMissing) {
        nameError.textContent = 'Введите имя';
        name.classList.add('input_invalid');
    } else if (name.validity.tooShort) {
        nameError.textContent = `Имя должно содержать минимум ${ name.minLength } символов; Вы ввели ${ name.value.length }.`;
        name.classList.add('input_invalid');
    }

    if(!privacy.checked) {
        policy.classList.add('policy_error');
        console.log(privacy.checked);
    } else {
        policy.classList.remove('policy_error');
        console.log(privacy.checked);
    }
}

export {emailInputValid, nameInputValid, mySubmitValid, privacyClick, text, form, email, name, privacy};