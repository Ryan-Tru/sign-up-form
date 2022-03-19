const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-pass');
const errorMessage = document.querySelector('.error-message');
const createBtn = document.querySelector('.create-btn');


createBtn.addEventListener('click', function checkPassword() {
    if(password.value === confirmPassword.value && password.value != '' && confirmPassword.value != '') {
        console.log('Hooray!');
    } else {
        password.classList.add('error');
        errorMessage.style.display = 'block';
        confirmPassword.classList.add('error');
    }
}
);

