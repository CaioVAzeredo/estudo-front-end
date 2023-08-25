const menorValor = 1
const maiorValor = 1000
const numAleatorio = geraNum()

function geraNum() {
    return Number((Math.random() * maiorValor + 1).toFixed(0))
}

console.log(numAleatorio)


const elementoMenorValor = document.querySelector("#menor-valor")
elementoMenorValor.innerHTML = menorValor
const elementoMaiorValor = document.querySelector("#maior-valor")
elementoMaiorValor.innerHTML = maiorValor
