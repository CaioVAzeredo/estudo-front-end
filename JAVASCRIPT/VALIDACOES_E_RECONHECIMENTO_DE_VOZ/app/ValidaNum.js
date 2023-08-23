const chute = document.querySelector("#chute")
function verificavalor(valor) {
    if (valor == 'zero') { valor = Number(0) }
    if (valor == 'um') { valor = Number(1) }
    if (valor == 'dois') { valor = Number(2) }
    if (valor == 'tres') { valor = Number(3) }
    if (valor == 'quatro') { valor = Number(4) }
    if (valor == 'cinco') { valor = Number(5) }
    if (valor == 'seis') { valor = Number(6) }
    if (valor == 'sete') { valor = Number(7) }
    if (valor == 'oito') { valor = Number(8) }
    if (valor == 'nove') { valor = Number(9) }
    if (valor == 'dez') { valor = Number(10) }

    const numInteiro = Number(valor)


    if (condicaoMaiorOuMenor(numInteiro)) {
        alert(`O numero tem que está entre ${menorValor} e ${maiorValor}`)
    } else {
        if (!valorNaN(numInteiro)) {
            criaElemento(valor)
        }
    }
    if (valorNaN(numInteiro)) {
        alert("Não é um número. Por favor insira um número")
    }

}


function valorNaN(numInteiro) {
    return Number.isNaN(numInteiro)
}

function condicaoMaiorOuMenor(numInteiro) {
    return numInteiro > maiorValor || numInteiro < menorValor

}

