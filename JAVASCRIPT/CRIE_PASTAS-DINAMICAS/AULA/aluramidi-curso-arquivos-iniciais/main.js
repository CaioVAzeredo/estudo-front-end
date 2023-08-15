function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio)

    if (elemento === null) {
        alert('Elemento nao encontrado')
    }
    if(elemento != null && elemento.localName === 'audio'){
        elemento.play()
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla') //transforma em array

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (e) {
        if (e.keycode === 'Space' || e.code === 'Enter') {
            tecla.classList.add('ativa')
        }
        if (e.keycode === 'Space' || e.code === 'Enter') {
            tecla.classList.remove('ativa')
        }
    }
}
