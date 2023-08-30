import ehUmCPF from "./valida-cpf.js"

const camposDoForumlario = document.querySelectorAll("[required]")


camposDoForumlario.forEach((campo) =>{
    campo.addEventListener("blur", ()=> verificaCampo(campo))
})

function verificaCampo(campo){
    ehUmCPF(campo)
}
