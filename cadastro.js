//cadastro
var botaoCadastro = document.getElementById("botaoCadastro");
var fundoCadastro = document.getElementById("fundoCadastro");
var fecharCadastro = document.getElementById("fecharCadastro");

botaoCadastro.onclick = function () {
    fundoCadastro.classList.add("visivel");
}

fecharCadastro.onclick = function () {
    fundoCadastro.classList.remove("visivel");
}

fundoCadastro.onclick = function (event) {
    if (event.target == fundoCadastro) {
        fundoCadastro.classList.remove("visivel");
    }
}

//seleciona o formulário
var formCadastro = fundoCadastro.querySelector('form');
//quando for enviar mandar os dados
formCadastro.onsubmit = function(e){
    //seleciona os inputs
    var emailCadastro = document.getElementById("emailCadastro");
    var senhaCadastro = document.querySelector("#senhaCadastro");

    //seleciona a modal
    var modalCadastro = document.querySelector('#modalCadastro');
//localStorage.email = "marianaruther@gmail.com"
//localStorage.setItem("email", "marianaruther@gmail.com")

    var usuarios = JSON.parse(localStorage.usuarios || "[]")

    usuarios.push({
        // nome: nomeCadastro.value,
        email: emailCadastro.value,
        senha: senhaCadastro.value,
    });

    // localStorage.email = emailCadastro.value;
    // localStorage.senha = senhaCadastro.value;

    localStorage.usuarios = JSON.stringify(usuarios);
}