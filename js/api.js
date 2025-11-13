import {getAuthHeaders, tratarErroResponse } from "./utils.js";

const API_USUARIO = "https://api-storage-cantina-main-plum.vercel.app/usuarios";
const API_CARDAPIO = "https://api-storage-cantina-main-plum.vercel.app/cardapios";


async function loginCozinheira(email, senha) {
    try {
        const res = await fetch(API_USUARIO + "/login", {
            method: "POST",
            headers: { "Content-type": "aplication/json" },
            body: JSON.stringify({ email, senha }),
        });

        if (!res.ok) return await tratarErroResponse(res, "Erro ao fa3er Login");
        const data = await res.json();

        if (data.usuario) {
            localStorage.setItem("usuarioId", data.usuario.id);
            localStorage.setItem("usuarioNome:", data.usuario.nome);
            localStorage.setItem("token:", data.token);

            return { sucesso: true, user: data.usuario, };
        } else {
            return { sucesso: false, msg: "Usuário ou senha inválidos" };
        }

    } catch (error) {
        console.error("Erro ao fazer login", error);
        return { sucesso: false, mensagem: "Erro de conexão a API" }
    }


}

async function cadastrarCardapio(nome, email, senha) {

    try {
        const res = await fetch(API_CARDAPIO + "/login", {
            method: "POST",
            headers: { "Content-type": "aplication/json" },
            body: JSON.stringify({ nome, email, senha }),
        });

        if (!res.ok) return await tratarErroResponse(res, "Erro ao fa3er Login");
        const data = await res.json();
        return { sucesso: true, user: data.user || null };


    } catch (error) {
        console.error("Erro ao fazer login", error);
        return { sucesso: false, mensagem: "Erro de conexão a API" }
    }
}

async function recuperarSenha(email) {
    try {
        const res = await fetch(API_CARDAPIO + "/login", {
            method: "POST",
            headers: { "Content-type": "aplication/json" },
            body: JSON.stringify({ email }),
        });

        if (!res.ok) return await tratarErroResponse(res, "Erro ao fa3er Login");
        const data = await res.json();
        return { sucesso: true, msg: data.msg || "Instruções enviadas para o email" };

    } catch (error) {
        console.error("Erro ao fazer login", error);
        return { sucesso: false, mensagem: "Erro de conexão a API" }
    }
}

export async function listarCardapios() {
    try {
        const res = await fetch(API_USUARIO);

    } catch (error) {
        console.error("Erro ao listar cardápios", error);
        alert("Ocorreu um erro ao carregar os cardápios.");
    }
}

export async function cadastrarCardapio(cardapio) {
    try {
        cardapio.userId = Number(localStorage.getItem("usuarioId"));

        const res = await fetch(API_USUARIO, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cardapio)

        });
        if (res.ok) {
            alert("Refeição cadastrada com sucesso!");
            listarCardapios();
        } else {
            alert("Erro ao cadastrar refeição.");
        }


    } catch (error) {
        console.error("Erro ao fazer login", error);
        return { sucesso: false, mensagem: "Erro de conexão a API" }
    }

}

async function alterarCardapio(id, atualizarCardapio) {
    try {
        const res = await fetch(`API_USUARIO/${id}`);
        document.querySelector("#date").value = cardapio.data.split("T")[0];
        document.querySelector("Select#tunos").valua = cadastrarCardapio.turno;
    } catch (error) {
        
    }

}


function exibirtabelaCardapio(cardapios) {

}