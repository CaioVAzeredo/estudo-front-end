const sectionLivros = document.querySelector("#livros")

function exibelivros(listaLivros) {
  sectionLivros.innerHTML = ''
  listaLivros.forEach(livro => {
    let disponibilidade = verificaDisponibilidade(livro)
    sectionLivros.innerHTML += `
        <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
  })
}
function verificaDisponibilidade(livro) {
  if (livro.quantidade > 0) {
    return 'livro__imagem'
  } else {
    return 'livro__imagem indisponivel'
  }

}