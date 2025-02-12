var saldo: number = 3000;

var elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
var elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}

if (elementoDataAcesso != null) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatarData(dataAcesso);
}

