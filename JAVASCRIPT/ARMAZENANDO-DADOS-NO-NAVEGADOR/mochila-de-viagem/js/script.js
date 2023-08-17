const frm = document.querySelector("#novoItem")
const lista = document.querySelector(".lista")
//localStorage
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach((e) => {
    criaElemento(e)
})

frm.addEventListener("submit", (evento) => {
    evento.preventDefault()
    //variaveis
    const nome = evento.target.elements['nome']
    const qtd = evento.target.elements['quantidade']

    //LocalStorage
    const existe = itens.find(elemento => elemento.nome === nome.value) //vendo se tem o nome de itens no nome do form

    //criando objeto com as informações de nome e quantidade
    const itemAtual = {
        "nome": nome.value,
        "quantidade": qtd.value
    }


    if (existe) {
        itemAtual.id = existe.id
        atualizaElemento(itemAtual)
        itens[existe.id] = itemAtual
    } else {
        itemAtual.id = itens.length
        criaElemento(itemAtual)
        itens.push(itemAtual)
    }

    //adicionando o array no localSotorage
    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    qtd.value = ""

})


function criaElemento(item) {
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")
    const numeroItem = document.createElement("strong")
    numeroItem.dataset.id = item.id //dataset é para criar um data no html e o .id é o que vem sem seguida, entao .dataset.id = data-id
    numeroItem.innerHTML = item.quantidade

    novoItem.appendChild(numeroItem) //appendChild coloca um elemento como filho de outro 
    novoItem.innerHTML += item.nome
    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem)
}
function botaoDeleta(id){
    const elementoBotao = document.createElement("button")
    elementoBotao.innerHTML = "X"

    elementoBotao.addEventListener("click", function(){
        deleteElemento(this.parentNode, id)
    })
    return elementoBotao
}

function deleteElemento(tag, id){
    tag.remove()
    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}