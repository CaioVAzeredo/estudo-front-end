const frm = document.querySelector("#novoItem")
const lista = document.querySelector(".lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach((e) => {
    console.log(e)
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = e.target.elements['nome'].value
    const qtd = e.target.elements['quantidade'].value

    criaElemento(nome, qtd)
    nome.value = ""
    qtd.value = ""

})


function criaElemento(nome, qtd) {
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")
    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = qtd


    novoItem.appendChild(numeroItem) //appendChild coloca um elemento como filho de outro 
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)
    localStorage.setItem("nome", nome)
    localStorage.setItem("quantidade", qtd)

    //criando objeto com as informações de nome e quantidade
    const itemAtual = {
        "nome": nome,
        "qunatidade": qtd
    }

    //adicionando o objeto no array 
    itens.push(itemAtual)

    //adicionando o array no localSotorage
    localStorage.setItem("itens", JSON.stringify(itens))
}