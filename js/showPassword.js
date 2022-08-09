let btn = document.querySelector('.fa-eye');
btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#password');
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text');
        return;
    }
    inputSenha.setAttribute('type', 'password');
})