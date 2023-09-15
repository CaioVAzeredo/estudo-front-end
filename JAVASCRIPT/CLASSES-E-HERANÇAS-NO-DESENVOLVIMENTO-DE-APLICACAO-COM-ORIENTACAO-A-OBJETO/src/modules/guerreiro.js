import { Personagem } from "./personagem.js";
export class Guerreiro extends Personagem {
    elementoMagico
    levelMagico
    inteligencia
    forca
    static descricao = 'Você será esmagado pela fúria do Guerreiro!'
    static tipo = 'Guerreiro'

    constructor(nome, elementoMagico, levelMagico, inteligencia, forca) {
        super(nome)
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
        this.forca = forca
    }

    obterInsignia() {
        if (level >= 7 && forca >= 5) {
            return 'Guerreiro furioso'
        }
        return super.obterInsignia()
    }
}