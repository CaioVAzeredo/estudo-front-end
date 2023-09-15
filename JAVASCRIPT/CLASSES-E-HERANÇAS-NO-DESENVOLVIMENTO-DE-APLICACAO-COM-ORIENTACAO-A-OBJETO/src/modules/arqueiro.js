import { Personagem } from "./personagem.js"

export class Arqueiro extends Personagem{
    elementoMagico
    levelArqueiro
    inteligencia
    tipo = 'Arqueiro'

    constructor(nome, level, elementoMagico, levelArqueiro, inteligencia){
        super(nome, level)
        this.elementoMagico = elementoMagico
        this.levelArqueiro = levelArqueiro
        this.inteligencia = inteligencia
    }

    obterInsigina(){
        if(this.level >= 5 && this.inteligencia >=5){
            return `Mestre do/a ${this.elementoMagico}`
        }
        return super.obterInsigina()
    }
}