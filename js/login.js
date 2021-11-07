const signin_btn = document.querySelector('#siginin-button');
const signup_btn = document.querySelector('#siginup-button');
const container = document.querySelector('.container');

signup_btn.addEventListener('click', () => {
    container.classList.add('siginup-mode');
});
signin_btn.addEventListener('click', () => {
    container.classList.remove('siginup-mode');
});

