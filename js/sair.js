let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let logado = document.querySelector('#logado');

logado.innerHTML = `Bem vindo ${userLogado.nome}`;

if (localStorage.getItem('token') == null) {
    alert('Você precisar logar para poder acessar o conteúdo');
    window.location.href = '../index.html';
}

function sair() {
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    window.location.href = '../index.html'
}