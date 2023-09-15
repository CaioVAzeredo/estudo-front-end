export class Personagem {
    nome // nao precisa ser declarado fora do constructor, é opcional
    vida = 100
    mana = 100
    level // nao precisa ser declarado fora do constructor, é opcional
    tipo // nao precisa ser declarado fora do constructor, é opcional
    descricao

    constructor(nome, level, tipo) {
        this.nome = nome
        this.level = level
        this.tipo = tipo
        
    }

    obterInsigina() {
        if (this.level >= 5) {
            return `Implacavel ${this.tipo}`
        }
        return `${this.tipo} iniciante`
    }
}