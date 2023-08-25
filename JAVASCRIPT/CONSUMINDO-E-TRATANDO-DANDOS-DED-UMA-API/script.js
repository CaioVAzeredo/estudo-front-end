async function buscaendereco(cep) {
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPconvertida = await consultaCEP.json()
        if (consultaCEPconvertida.erro) {
            throw Error('CEP não existe')
        }
        console.log(consultaCEPconvertida)
        return consultaCEPconvertida
    } catch (erro) {
        console.log(erro)
    }

}


const cep = document.querySelector("#cep")

cep.addEventListener("focusout", () => {
buscaendereco(cep.value)
})