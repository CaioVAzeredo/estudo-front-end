const inputcheck = document.querySelector("#modo-noturno")
const elemento = document.querySelector('body')

inputcheck.addEventListener('click', () => {
    let modo;
    if (inputcheck.checked) {
        modo = 'dark';
    } else {
        modo = 'light';
    }
    elemento.setAttribute("data-bs-theme", modo);
})