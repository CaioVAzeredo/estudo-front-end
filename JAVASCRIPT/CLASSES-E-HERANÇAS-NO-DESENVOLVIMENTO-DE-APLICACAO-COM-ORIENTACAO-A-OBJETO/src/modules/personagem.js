export class Personagem {
    nome // nao precisa ser declarado fora do constructor, é opcional
    vida = 100
    mana = 100
    level // nao precisa ser declarado fora do constructor, é opcional


    constructor(nome, level) {
        this.nome = nome
        this.level = level
    }

    obterInsigina() {
        if (this.level >= 5) {
            return `Implacavel ${this.tipo}`
        }
        return `${this.tipo} iniciante`
    }
}
