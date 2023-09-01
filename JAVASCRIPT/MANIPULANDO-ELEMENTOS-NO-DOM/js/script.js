const html = document.querySelector("#html")
const btnFoco = document.querySelector(".app__card-button--foco")
const btnCurto = document.querySelector(".app__card-button--curto")
const btnLongo = document.querySelector(".app__card-button--longo")
const banner = document.querySelector('.app__image')
const texto = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3')
const timer = document.querySelector("#timer")

musica.loop = true
const btnIniciarOuPausar = document.querySelector("#start-pause span")
const img = document.querySelector("#start-pause img")

let tempoEmSegundos = 1500
let intervalo = null

const btnIniciar = document.querySelector("#start-pause")

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})
btnFoco.addEventListener('click', () => {
    tempoEmSegundos = 1500
    alterarContexto('foco')
    btnFoco.classList.add('active')
})

btnCurto.addEventListener('click', () => {
    tempoEmSegundos = 300
    alterarContexto('descanso-curto')
    btnCurto.classList.add('active')
})

btnLongo.addEventListener('click', () => {
    tempoEmSegundos = 900
    alterarContexto('descanso-longo')
    btnLongo.classList.add('active')
})

function alterarContexto(contexto) {
    mostrarTempo()
    botoes.forEach((btn) => btn.classList.remove('active'))
    html.setAttribute('data-contexto', contexto) //setAtribute('','') primeiro parametro é o atributo que quer ser modificado, o segundo é o conteúdo desse parametro
    banner.setAttribute('src', `imagens/${contexto}.png`)

    switch (contexto) {
        case "foco":
            texto.innerHTML = `Otimize sua produtividade,<br>
                              <strong class="app__title-strong">mergulhe no que importa.</strong>`
        case "descanso-curto":
            texto.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta.</strong>`
            break
        case "descanso-longo":
            texto.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break
        case "descanso-longo":
            texto.innerHTML = `Hora de voltar à superficie<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break
        default:
            break
    }
}


const contagemRegressiva = () => {
    /* iniciar() */
    if (tempoEmSegundos <= 0) {
        zerar()
        alert('tempo finalizado ')
        return
    }
    tempoEmSegundos -= 1
    mostrarTempo()
}


btnIniciar.addEventListener('click', iniciarOuPausar)
function iniciarOuPausar() {
    if(intervalo){
        zerar()
        return
    }
    intervalo = setInterval(contagemRegressiva, 1000)
    btnIniciarOuPausar.textContent = "Pausar"
}

function zerar() {
    clearInterval(intervalo)
    btnIniciarOuPausar.textContent = "Começar"
    intervalo = null
}

function mostrarTempo(){
    const tempo = new Date(tempoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    timer.innerHTML = `${tempoFormatado}`
}
mostrarTempo()