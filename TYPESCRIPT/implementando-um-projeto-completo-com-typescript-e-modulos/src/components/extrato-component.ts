import Conta from "../types/Conta.js";
import { FormatoData } from "../types/formatoData.js";
import { GrupoTransacao } from "../types/GrupoTransacoes.js";
import { formatarMoeda, formatarData } from "../utils/formatters.js";

const elementoResitroTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes");

renderixarExtrato()

function renderixarExtrato(): void {
    const grupoTransacoes: GrupoTransacao[] = Conta.getGruposTransacoes();
    elementoResitroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes: string = "";
    for (let grupoTransacao of grupoTransacoes) {
        let htmlTransacaoItem: string = "";
        for (let transacao of grupoTransacao.transacoes) {
            htmlTransacaoItem += `
<div class="transacao-item">
                        <div class="transacao-info">
                            <span class="tipo">${transacao.tipoTransacao}</span>
                            <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                        </div>
                        <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
                    </div>
            `
        }
        htmlRegistroTransacoes += `
        <div class = "transacoes-group">
        <strong class = "mes-group">${grupoTransacao.label}</strong>
        ${htmlTransacaoItem}
        </div>
        `
    }
    if (htmlRegistroTransacoes === "") {
        htmlRegistroTransacoes = "<div>Não há transações registradas. </div>"
    }

    elementoResitroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}

const ExtratoCOmponent = {
    atualizar(): void {
        renderixarExtrato();
    }
}

export default ExtratoCOmponent