const botoes = document.querySelectorAll('.btn')
const botaoLivrosDisponiveis = document.querySelector('#btnLivrosDisponiveis')
const valor_total_livros_disponiveis = document.querySelector("#valor_total_livros_disponiveis")


botoes.forEach(btn => btn.addEventListener("click", filtrarLivros))
function filtrarLivros() {
    const elemento = document.getElementById(this.id)
    const categoria = elemento.value


    let livrosFiltrados = filtro(categoria)

    const valorTotal = calculosDeValorTotal(livrosFiltrados)
    exibelivros(livrosFiltrados)
    if (categoria == 'disponivel') {
        valor_total_livros_disponiveis.innerHTML = `<div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`
    } else {
        valor_total_livros_disponiveis.innerHTML = ''
    }
}



function filtro(categoria) {
    if (categoria == 'disponivel') {
        return filtrarPorDisponibilidade()
    } else {
        return filtroPorCategoria(categoria)
    }
}

function filtroPorCategoria(categoria) {
    return livrosConvertido.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livrosConvertido.filter(livro => livro.quantidade > 0)
}
