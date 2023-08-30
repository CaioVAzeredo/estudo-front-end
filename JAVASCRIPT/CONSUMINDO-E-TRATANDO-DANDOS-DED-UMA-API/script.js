async function buscaendereco(cep) {
    const mensagemErro = document.querySelector("#erro")
    mensagemErro.innerHTML = ""
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPconvertida = await consultaCEP.json()
        if (consultaCEPconvertida.erro) {
            throw Error('CEP não existe')
        }

        const cidade = document.querySelector("#cidade")
        const logradouro = document.querySelector("#endereco")
        const estado = document.querySelector("#estado")

        cidade.value = consultaCEPconvertida.localidade
        logradouro.value = consultaCEPconvertida.logradouro
        estado.value = consultaCEPconvertida.uf


        console.log(consultaCEPconvertida)
        return consultaCEPconvertida
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido</p>`
        mensagemErro.style.color = "red"
        console.log(erro)
    }

}


const cep = document.querySelector("#cep")

cep.addEventListener("focusout", () => {
    buscaendereco(cep.value)
})