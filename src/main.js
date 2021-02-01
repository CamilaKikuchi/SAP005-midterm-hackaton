const firstPageButton = document.getElementById("button-input-nome");
const nameInput = document.getElementById("input-nome");
const pagInicial = document.getElementById("tela-inicial");
const pagExposicao = document.getElementById("tela-exposicao");
const formPagInicial = document.getElementById("form-pag-inicial");
const headerNomeUser = document.getElementById("header-nome-usuario");

firstPageButton.addEventListener('click', (event) => {
    event.preventDefault();
    if(nameInput.value !== ""){
        pagInicial.classList.add("none");
        pagExposicao.classList.remove("none");
        headerNomeUser.innerHTML = `<b>Olá, ${nameInput.value}!</b>`
    } else {
        const msgErro = document.createElement("p");
        msgErro.innerText = "Você deve fornecer o seu nome para continuar!"
        formPagInicial.appendChild(msgErro);
    }
})

