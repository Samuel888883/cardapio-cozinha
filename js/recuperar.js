import { recuperarSenha } from "./api.js";
import { mostrarMensagem } from "./utils.js";

document.getElementByld("formLogin").addEventListener("submit",async(event) =>{
    event.preventDefault();

    const email = document.getElementByld("email").valuel.trim();

    if(!email){
        mostrarMensagem("Por favor,preencha senha e email.", red);
        return;
    }
    const botaoLogin = document.getElementById("recuperar");
    botaoLogin.disabled = true;
    botaoLogin.textContent = "Enviando...";

    const {sucesso,msg} = await recuperarSenha(email);

     botaoLogin.disabled = false;
    botaoLogin.textContent = "recuperar";

    if(sucesso){
        mostrarMensagem(msg ||`Instruções enviadas para o email!`, "green");
       
    } else {
        mostrarMensagem(msg || "Falha ao recuperar senha. Verifique email.", "red");
    }
        
    

    
});
