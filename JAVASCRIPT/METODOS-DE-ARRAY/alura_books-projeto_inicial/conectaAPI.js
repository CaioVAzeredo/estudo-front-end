let livrosConvertido = []
apiLivros()

async function apiLivros() {
    const livros = await fetch("https://guilhermeonrails.github.io/casadocodigo/livros.json")

    livrosConvertido = await livros.json()

    let livrosComDesconto = aplicarDesconto(livrosConvertido)
    exibelivros(livrosComDesconto)
}
