console.log("JavaScript conectado!");

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("Formulário enviado!");

    const mensagemSucesso = document.getElementById("mensagem-sucesso");

    mensagemSucesso.textContent = "Mensagem enviada com sucesso!";
    mensagemSucesso.style.color = "green";
});