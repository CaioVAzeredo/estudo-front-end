const html = document.querySelector("#html")
const btnFoco = document.querySelector(".app__card-button--foco")
const btnCurto = document.querySelector(".app__card-button--curto")
const btnLongo = document.querySelector(".app__card-button--longo")
const banner = document.querySelector('.app__image')
const texto = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const musicaFocoInput = document.querySelector('#alternar-musica')

const musica = new Audio('/sons/luna-rise-part-one.mp3')
musica.loop = true

musicaFocoInput.addEventListener('change', ()=>{
    if(musica.paused){
        musica.play()
    }else{
        musica.pause()
    }
})
btnFoco.addEventListener('click', () => {
    alterarContexto('foco')
    btnFoco.classList.add('active')
})

btnCurto.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    btnCurto.classList.add('active')
})

btnLongo.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    btnLongo.classList.add('active')
})

function alterarContexto(contexto) {
    botoes.forEach( (btn) => btn.classList.remove('active'))
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
