import { Personagem } from "./personagem.js"

export class Mago extends Personagem {
    elementoMagico
    levelMagico
    inteligencia
    static descricao = 'O mago é implacável!'
    static tipo = 'Mago'

    constructor(nome, elementoMagico, levelMagico, inteligencia) {
        super(nome)
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