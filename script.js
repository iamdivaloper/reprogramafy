//login
var botao = document.getElementById("botao");
var fundo = document.getElementById("fundo");
var fechar = document.getElementById("fechar");

//onclick: quando alguém clicar no botão, vou executar uma determinada função; serve para saber se está funcionando o clique;
botao.onclick = function () {
    // console.log("cliquei");
    fundo.classList.add("visivel");
}

fechar.onclick = function () {
    fundo.classList.remove("visivel");
}

fundo.onclick = function (event) {
    // console.log(e);
    if (event.target == fundo) {
        fundo.classList.remove("visivel");
    }
}

//seleciona o formulário
var form = document.querySelector('form');
//quando for enviar mandar dados
form.onsubmit = function(e) {

// document.querySelector('#botao') <--quando for classe, coloca .botao para chamar no js;
// console.log(botao); <--testar o que tiver errado na class;

var email = document.querySelector("#email");
var senha = document.querySelector("#senha");

//seleciona a modal
var modal = document.querySelector('#modal');

//verifica se o email e a senha são permitidos
var usuarios = JSON.parse(localStorage.usuarios);
var correto;
for (var i = 0; i < usuarios.legth; i++) {
    if (usuarios[i].email === email.value && usuarios[i].senha === senha.value) {
        correto = true;
        break;
    }
}

if(!correto) {
    //adiciona classe de erro na modal para mostrar um feedback
    modal.classList.add('erro');

    //remove a classe com erro depois de trazer a animação
    setTimeout(function() {
        modal.classList.remove('erro');
    }, 1000);
}

//não deixa o usuário enviar o formulários
    return false;
}


// var formulario = document.querySelector("form"); // vou informar que eu quero um formulário específico
// formulario.onsubmit = function () {
//     if (email.value !== localStorage.email || senha.value !== localStorage.senha) {
//         alert("Email ou Senha errados");
//         modal.classList.add("erro");

//         setTimeout(function () {
//             modal.classList.remove("erro");
//         }, 1000);  /*1000 = 1s */
//         return false;
//     }

//     localStorage.usuario = email.value;
// }
// // return false = vai para a página do action dentro do form;     

