const botao = document.getElementById("btn-ver-mais");
const conteudoExtra = document.getElementById("conteudo-extra");
 
botao.addEventListener("click", function(){
 
    if(conteudoExtra.innerHTML === ""){
 
        conteudoExtra.innerHTML = `
            <p>
                Estou sempre buscando aprender coisas novas e
                melhorar minhas habilidades em desenvolvimento web.
                Meu objetivo é continuar evoluindo e criar projetos
                cada vez melhores.
            </p>
        `;
 
        botao.textContent = "Ver menos";
 
    }else{
 
        conteudoExtra.innerHTML = "";
        botao.textContent = "Ver mais";
 
    }
 
});
 
 
const mensagem = document.getElementById("mensagem");
const contador = document.getElementById("contador");
 
mensagem.addEventListener("input", function(){
 
    contador.textContent =
        mensagem.value.length + " caracteres";
 
});
 
 
const formulario = document.getElementById("formulario");
const mensagemSucesso = document.getElementById("mensagem-sucesso");
 
formulario.addEventListener("submit", function(event){
 
    event.preventDefault();
 
    // Mensagem que aparece no site
    mensagemSucesso.textContent = "Mensagem enviada com sucesso!";
 
    // Mensagem que aparece no Console do navegador
    console.log("Formulário enviado!");
 
    formulario.reset();
 
    contador.textContent = "";
 
});
 