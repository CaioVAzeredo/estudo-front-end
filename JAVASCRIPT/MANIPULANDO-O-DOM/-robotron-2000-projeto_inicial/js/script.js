const somar = document.querySelector('#somar')
const subtrair = document.querySelector('#subtrair')
const braco = document.querySelector('#braco')
const controle = document.querySelectorAll('.controle-ajuste')

controle.forEach((botoes)=>{
    botoes.addEventListener("click", (e)=>{
        operacoes(e.target.textContent) //textContent é a mesma coisa que innerHTML
    })
})

function operacoes(valor) {
    if (valor === "-") {
        if (braco.value > 0) {
            braco.value = parseInt(braco.value) - 1 //transformar em um numero inteiro
        }
    } else {
        braco.value = parseInt(braco.value) + 1 //transformar em um numero inteiro
    }
}
