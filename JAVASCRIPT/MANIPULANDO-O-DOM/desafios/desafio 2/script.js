const btn = document.querySelector("#calcular")

btn.addEventListener("click", () => {
    var divNova = document.createElement("div");
    divNova.innerHTML = 'Fui clicado'
    alert('fui clicado')
})