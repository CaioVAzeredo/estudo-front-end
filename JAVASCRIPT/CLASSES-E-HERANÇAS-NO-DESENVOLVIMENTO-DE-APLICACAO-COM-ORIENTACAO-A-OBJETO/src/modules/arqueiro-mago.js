import { Mago } from "./mago.js";
import { Arqueiro } from "./arqueiro.js";
import { Personagem } from "./personagem.js";

export class ArqueiroMago extends Personagem{
    ladoAqueiro
    ladoMago
    static descricao = 'Detentor de lancas e flechas mágicas!'
    static tipo =  'ArqueiroMago'

    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia){
        super(nome)
        this.ladoAqueiro = new Arqueiro(nome, destreza)
        this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia)
    }

    obterInsigina() {
        return `${this.ladoAqueiro.obterInsigina()} e ${this.ladoMago.obterInsigina()}`
    }
}