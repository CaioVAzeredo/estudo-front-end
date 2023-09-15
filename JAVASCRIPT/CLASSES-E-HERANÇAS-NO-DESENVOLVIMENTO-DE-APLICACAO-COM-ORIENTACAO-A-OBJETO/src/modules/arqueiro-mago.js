import { Mago } from "./mago.js";
import { Arqueiro } from "./arqueiro.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem{
    ladoAqueiro
    ladoMago
    tipo = 'ArqueiroMago'

    constructor(nome, level, destreza, elementoMagico, levelMagico, inteligencia){
        super(nome, level)
        this.ladoAqueiro = new Arqueiro(nome, level, destreza)
        this.ladoMago = new Mago(nome, level, elementoMagico, levelMagico, inteligencia)
    }

    obterInsigina() {
        return `${this.ladoAqueiro.obterInsigina()} e ${this.ladoMago.obterInsigina()}`
    }
}