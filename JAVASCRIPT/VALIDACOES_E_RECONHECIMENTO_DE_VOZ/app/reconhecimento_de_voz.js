window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()



recognition.addEventListener('result', onSpeak)
function onSpeak(e){
    const num = e.results[0][0].transcript
    
    verificavalor(num)
}

function criaElemento(numero){
    const novoItem = document.createElement("div")
    novoItem.classList.add('mensagem')
    novoItem.setAttribute('id', 'chute')

    const vcDisse = document.createElement("div")
    novoItem.appendChild(vcDisse)

    const span = document.createElement("span")
    span.classList.add('box')
    novoItem.appendChild(span)

    const resultado = document.createElement("div")
    novoItem.appendChild(resultado)
    
    document.body.appendChild(novoItem)
    /* const valor = document.createElement("i")
    valor.classList.add("fa-solid")
    valor.classList.add("fa-arrow-up")
    novoItem.appendChild(valor) */
    span.innerHTML = numero
    console.log(numero)
}