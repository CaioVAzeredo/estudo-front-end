const btnAparecer = document.querySelector(".aparecer")
const btnEsconder = document.querySelector(".esconder")
const lista = document.querySelector(".lista")


btnAparecer.addEventListener("click", () => {
    lista.style.display = 'block'
})
btnEsconder.addEventListener("click", () => {
    lista.style.display = 'none'  
})