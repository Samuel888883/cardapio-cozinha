import { loginCozinheira } from "./api.js";
import { mostrarMensagem } from "./utils.js";

document.getElementByld("formLogin").addEventListener("submit",async(event) =>{
    event.preventDefault();

    const email = document.getElementByld("email").valuel.trim();
    const senha = document.getElementByld("senha").valuel.trim();

    if(!email || !senha){
        mostrarMensagem("Por favor,preencha senha e email.", red);
        return;
    }
    const botaoLogin = document.getElementById("botaoLogin");
    botaoLogin.disabled = true;
    botaoLogin.textContent = "Entrando...";
    const {sucesso,msg,user} = await loginCozinheira(email, senha);

     botaoLogin.disabled = false;
    botaoLogin.textContent = "acesse";

    if(sucesso){
        mostrarMensagem(`Bem Vindo, ${user.nome}!`, "green");
        setTimeout(() =>{
            window.location.href = "sistema.html";
        },1500);
    } else {
        mostrarMensagem(msg || "Falha ao fazer login. Verifique email e senha.", "red");
    }
        
    

    
});
