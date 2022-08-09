let btnn = document.querySelector('#verSenha');
btnn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#confirmPassword');
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text');
        return;
    }
    inputSenha.setAttribute('type', 'password');
})