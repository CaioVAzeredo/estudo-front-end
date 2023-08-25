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
    if(valor == 'game over'){
        document.body.innerHTML = `
        <h1>Fim de Jogo</h1>
         <button id ='btn'>Jogar Novamente</button>
        `
    document.body.style.backgroundColor = "red";
    }
    const numInteiro = Number(valor)
    

    if (condicaoMaiorOuMenor(numInteiro)) {
        chute.innerHTML = `<div>O numero tem que está entre ${menorValor} e ${maiorValor}</div>`
        return
    } else {
        if (valorNaN(numInteiro)) {
            chute.innerHTML = `<div>Valor Inválido</div>`
            return
        }
    }
    if (valorNaN(numInteiro)) {
        chute.innerHTML = `<div>Não é um número. Por favor insira um número</div>`
        return
    }

    if (numInteiro === numAleatorio) {
        document.body.innerHTML = `
        <h1>Parabens. Você acertou o número </h1>
         <h3>${numInteiro}</h3>
         <button id ='btn'>Jogar Novamente</button>
        `
        
    }
    if (numInteiro !== numAleatorio) {
        if (numInteiro > numAleatorio) {
            chute.innerHTML = `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
            `
        } else {
            if (numInteiro < numAleatorio) {
                chute.innerHTML = `
                <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
                `
            }
        }
    }

}


function valorNaN(numInteiro) {
    return Number.isNaN(numInteiro)
}

function condicaoMaiorOuMenor(numInteiro) {
    return numInteiro > maiorValor || numInteiro < menorValor

}
/* 
const elementoChute = document.querySelector("#chute")
function verificavalor(chute) {
    const numero = +chute
    console.log(numero)
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numAleatorio) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numAleatorio}</h3>
        `
    } else if (numero > numAleatorio) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
} */