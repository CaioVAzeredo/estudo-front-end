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
<<<<<<< HEAD
        alert(`O numero tem que está entre ${menorValor} e ${maiorValor}`)
    } else {
=======
        chute.innerHTML = `<div>O numero tem que está entre ${menorValor} e ${maiorValor}</div>`
    } else{
>>>>>>> 8d7e145a17af1dc2f9af31900665e76188205c19
        if (!valorNaN(numInteiro)) {
            criaElemento(valor)
        }
    }
<<<<<<< HEAD
    if (valorNaN(numInteiro)) {
        alert("Não é um número. Por favor insira um número")
=======
    if (valorNaN(numInteiro)){
        chute.innerHTML = `<div>Não é um número. Por favor insira um número</div>`
>>>>>>> 8d7e145a17af1dc2f9af31900665e76188205c19
    }

}


function valorNaN(numInteiro) {
    return Number.isNaN(numInteiro)
}

function condicaoMaiorOuMenor(numInteiro) {
    return numInteiro > maiorValor || numInteiro < menorValor

}

