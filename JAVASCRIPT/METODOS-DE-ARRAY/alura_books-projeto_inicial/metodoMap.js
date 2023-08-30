function aplicarDesconto(livrosConvertido){
    const desconto = 0.3

    livrosComDesconto = livrosConvertido.map(livro => {
        return {...livro, preco: (livro.preco - (livro.preco * desconto))}
    })
    return livrosComDesconto
}