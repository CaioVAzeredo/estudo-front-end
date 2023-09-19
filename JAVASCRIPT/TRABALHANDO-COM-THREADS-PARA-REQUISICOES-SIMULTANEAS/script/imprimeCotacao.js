
const lista = document.querySelector('[data-lista]')

export default function imprimeCotacao(nome, valor){
    lista.innerHTML = ''

    for(let mult = 1; mult <= 1000; mult *= 10){
        const listaItem = document.createElement('li')
        listaItem.innerHTML =`${mult} ${nome}: R$${(valor * mult).toFixed(2)}`
        lista.appendChild(listaItem)
    }
}