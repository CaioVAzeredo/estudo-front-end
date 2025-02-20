import { Transacao } from "./Transacao.js";
import { TipoTransacao } from "./TipoTransacao.js";

let saldo: number = 3000;
const transacoes: Transacao[] = JSON.parse(localStorage.getItem("transacoes"), (key: string, value: string) => {
    if (key === "data") {
        return new Date(value)
    }
    return value;
}) || [];

function debitar(valor: number) {
    if (valor <= 0) {
        throw new Error("O valor a ser debitado dece ser maior que zero!");
    }

    if (valor > saldo) {
        throw new Error("Saldo insuficiente");
    }
    saldo -= valor;
}

function depositar(valor: number): void {
    if (valor > saldo) {
        throw new Error("Saldo insuficiente");
    }
    saldo += valor
}

const Conta = {
    getSaldo() {
        return saldo;
    },

    getDataAcesso(): Date {
        return new Date();
    },

    registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor);
        }
        else {
            throw new Error("Tipo de Transação é invalida");
        }
        transacoes.push(novaTransacao);
        console.log(novaTransacao);

        localStorage.setItem("Transacoes", JSON.stringify(transacoes));
    }
}

export default Conta;