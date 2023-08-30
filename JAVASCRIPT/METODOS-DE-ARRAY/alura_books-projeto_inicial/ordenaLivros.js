const ordenarLivrosPorPreco = document.querySelector("#btnOrdenarPorPreco")

ordenarLivrosPorPreco.addEventListener("click", ordenarPorPreco)

function ordenarPorPreco(){
    const livrosOrdenados = livrosConvertido.sort((a, b) =>{
        return a.preco - b.preco
    })

    exibelivros(livrosOrdenados)
}