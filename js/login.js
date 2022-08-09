function entrar() {
    let usuario = document.querySelector('#usuario');
    let userLabel = document.querySelector('#userLabel');

    let senha = document.querySelector('#password');
    let passwordLabel = document.querySelector('#passwordLabel');

    let msgError = document.querySelector('#msgError');
    let listaUser = [];

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'));
    listaUser.forEach((item) => {
        if (usuario.value == item.usuarioCad && senha.value == item.senhaCad) {
            userValid = {
                nome: item.nomeCad,
                user: item.usuarioCad,
                senha: item.senhaCad
            }
        }
    })
    if (usuario.value == userValid.user && senha.value == userValid.senha) {
        window.location.href = '../pages/perfilUsuario.html';
        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2);
        localStorage.setItem('token', token);
        localStorage.setItem('userLogado', JSON.stringify(userValid));
    } else {
        userLabel.setAttribute('style', 'color: red');
        usuario.setAttribute('style', 'border-color: red');
        senha.setAttribute('style', 'border-color: red');
        passwordLabel.setAttribute('style', 'color: red');
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = 'Usuário ou senha incorretos';
        usuario.focus();
    }
}