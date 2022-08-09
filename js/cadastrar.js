let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validNome = false;

let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validUsuario = false;

let senha = document.querySelector('#password');
let labelSenha = document.querySelector('#labelSenha');
let validSenha = false;

let confirmarSenha = document.querySelector('#confirmPassword');
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha');
let validConfirmarSenha = false;

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red; font-weight: bold');
        labelNome.innerHTML = 'Nome * Insira no minímo 3 caracteres';
        nome.setAttribute('style', 'border-color: red');
        validNome = false;
    } else {
        labelNome.setAttribute('style', 'color: green; font-weight: bold');
        labelNome.innerHTML = 'Nome';
        nome.setAttribute('style', 'border-color: green');
        validNome = true;
    }
})

usuario.addEventListener('keyup', () => {
    if (usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color: red; font-weight: bold');
        labelUsuario.innerHTML = 'Usuário * Insira no minímo 5 caracteres';
        usuario.setAttribute('style', 'border-color: red');
        validUsuario = false;
    } else {
        labelUsuario.setAttribute('style', 'color: green; font-weight: bold');
        labelUsuario.innerHTML = 'Usuario';
        usuario.setAttribute('style', 'border-color: green');
        validUsuario = true;
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red; font-weight: bold');
        labelSenha.innerHTML = 'Senha * Insira no minímo 6 caracteres';
        senha.setAttribute('style', 'border-color: red');
        validSenha = false;
    } else {
        labelSenha.setAttribute('style', 'color: green; font-weight: bold');
        labelSenha.innerHTML = 'Senha';
        senha.setAttribute('style', 'border-color: green');
        validSenha = true;
    }
})


confirmarSenha.addEventListener('keyup', () => {
    if (senha.value != confirmarSenha.value) {
        labelConfirmarSenha.setAttribute('style', 'color: red; font-weight: bold');
        labelConfirmarSenha.innerHTML = 'Senhas não conferem';
        confirmarSenha.setAttribute('style', 'border-color: red');
        validConfirmarSenha = false;
    } else {
        labelConfirmarSenha.setAttribute('style', 'color: green; font-weight: bold');
        labelConfirmarSenha.innerHTML = 'Confirmar Senha';
        confirmarSenha.setAttribute('style', 'border-color: green');
        validConfirmarSenha = true;
    }
})

function cadastrar() {
    if (validNome && validUsuario && validSenha && validConfirmarSenha) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
        listaUser.push({
            nomeCad: nome.value,
            usuarioCad: usuario.value,
            senhaCad: senha.value,
        })
        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = '<strong>Cadastrado com sucesso! Redirecionando para o login</strong>';
        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML = '';
        /* Mudar a localização da página */
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1500);


    } else {
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = '<strong>Dados Incorretos!</strong>';
        msgSuccess.setAttribute('style', 'display: none');
        msgSuccess.innerHTML = '';
    }
}