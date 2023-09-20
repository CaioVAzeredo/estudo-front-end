//Conceitos de concorrência e paralelismo  
//Conceitos sobre sigle thread e multi thread 
//Conceito sobre web workers

import selecionaCotacao from "./imprimeCotacao.js";

                            /* DOLAR */
const graficoDolar = document.querySelector('#graficoDolar')
const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Dolar',
            data: [],
            borderWidth: 1
        }]
    },
});

                        /* FUNÇÕES */
/* gerar horario em tempo real  */
function geraHorario() {
    const data = new Date()
    const horario = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
    return horario
}

/* adicionar dados na tela */
function adicionarDados(grafico, legenda, dados) {
    grafico.data.labels.push(legenda)
    grafico.data.datasets.forEach((dataset) => {
        dataset.data.push(dados)
    })
    grafico.update()
}

let workerDolar = new Worker('./script/workers/workerDolar.js')
workerDolar.postMessage('usd')

workerDolar.addEventListener("message", e => {
    let tempo = geraHorario()
    let valor = e.data.ask
    selecionaCotacao("dolar", valor)
    adicionarDados(graficoParaDolar, tempo, valor)
})

                            /* IENE */
const graficoIene = document.querySelector('#graficoIene')
const graficoParaIene = new Chart(graficoIene, {
    type:'line',
    data: {
        label: [],
        datasets: [{
            label: 'Iene',
            data: [],
            bordeerWidth: 1
        }]
    }
})
let workerIene = new Worker("./script/workers/workerIene.js")
workerIene.postMessage('iene')
workerIene.addEventListener("message", e =>{
    let tempo = geraHorario()
    let valor = e.data.ask
    selecionaCotacao("iene", valor)
    adicionarDados(graficoParaIene, tempo, valor)
})



