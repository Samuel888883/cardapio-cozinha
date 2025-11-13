import { loginCozinheira } from "./api.js";
import { mostrarMensagem } from "./utils.js";

document.getElementByld("formLogin").addEventListener("submit",async(event) =>{
   event.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementByld("email").valuel.trim();
    const senha = document.getElementByld("senha").valuel.trim();

    if(!email || !senha){
        mostrarMensagem("Por favor,preencha senha e email.", red);
        return;
    }
    const botaoLogin = document.getElementById("cadastrar");
    botaoLogin.disabled = true;
    botaoLogin.textContent = "cadastrando...";

    const {sucesso,msg} = await logincadCozinheira(nome,email, senha);

     botaoLogin.disabled = false;
    botaoLogin.textContent = "Cadastrar";

    if(sucesso){
        mostrarMensagem(`cadastro realizado com sucesso !`, "green");
        setTimeout(() =>{
            window.location.href = "login.html";
        },1500);
    } else {
        mostrarMensagem(msg , "red");
    }
          
});