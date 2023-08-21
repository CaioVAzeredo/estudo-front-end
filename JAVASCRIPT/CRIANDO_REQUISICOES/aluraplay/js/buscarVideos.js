import { conectaAPI } from "./conectaApi.js";
import constroiCard from "./mostraVideos.js"


async function buscaVideo(e) {
    e.preventDefault()

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value
    const busca = await conectaAPI.buscaVideo(dadosDePesquisa)
    const lista = document.querySelector("[data-lista]")
    if (!busca.length == 0) {

        while (lista.firstChild) { //enquanto tem o primeiro filho
            lista.removeChild(lista.firstChild) //remova o primeiro filho da lista
        }
        busca.forEach(video => lista.appendChild(constroiCard(video.titulo, video.descricao, video.url, video.imagem)))
    } else {
        lista.innerHTML = `<h2 class = "mensagem__titulo"> Video não encontrado <h2>`
    }


}

document.querySelector("[data-botao]").addEventListener("click", e => {
    buscaVideo(e)
})
