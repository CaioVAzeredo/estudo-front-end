import { Personagem } from "./personagem.js"

export class Mago extends Personagem {
    elementoMagico
    levelMagico
    inteligencia
    tipo = 'Mago'

    constructor(nome, level, elementoMagico, levelMagico, inteligencia) {
        super(nome, level)
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
    }
    obterInsigina() {
        if (this.level >= 5 && this.inteligencia >= 5) {
            return `Mestre do/a ${this.elementoMagico}`
        }
        return super.obterInsigina()
    }
}