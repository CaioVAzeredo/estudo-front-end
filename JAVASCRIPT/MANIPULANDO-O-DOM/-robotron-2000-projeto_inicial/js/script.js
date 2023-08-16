const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatisticas]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((botoes) => {
    botoes.addEventListener("click", (e) => {
        //  se é + ou -           pegar a tag pai 
        operacoes(e.target.dataset.controle, e.target.parentNode) //textContent é a mesma coisa que innerHTML. parentNode serve para pegar o elemento pai 
        atualizaEstatisticas(e.target.dataset.peca)
        

    })
})
//+ ou -// tag pai   
function operacoes(valor, controle) {

    const peca = controle.querySelector('[data-contador]') //Pega somento a class = '.controle-contador' de dentro da tag pai 

    if (valor === "-") {
        if (peca.value > 0) {
            peca.value = parseInt(peca.value) - 1 //transformar em um numero inteiro
        }
    } else {
        peca.value = parseInt(peca.value) + 1 //transformar em um numero inteiro
    }
}

function atualizaEstatisticas(peca){
    console.log(pecas[peca])
    estatisticas.forEach((elemento)=>{
        console.log(elemento.dataset.estatisticas)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatisticas]
    })
}