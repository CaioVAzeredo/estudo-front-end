export class Personagem {
    nome // nao precisa ser declarado fora do constructor, é opcional
    vida = 100
    mana = 100
    #level // nao precisa ser declarado fora do constructor, é opcional // # - jogo da velha é para privar a variavel, ninguem consegue ter acesso 


    constructor(nome) {
        this.nome = nome
        this.#level = 1
    }

    aumentarLevel() {
        this.level += 1
    }

    diminuirLevel() {
        this.level -= 1
    }

    get level() {
        return this.#level
    }

    set level(novoLevel) {
        if (novoLevel >= 1 && novoLevel <= 10){
            this.#level = novoLevel
        }
    }
    obterInsigina() {
        if (this.#level >= 5) {
            return `Implacavel ${this.constructor.tipo}`
        }
        return `${this.constructor.tipo} iniciante`
    }

    static verificarVencedor(personagem1, personagem2) {
        if (personagem1 === personagem2) {
            return 'Empate!!!'
        }
        if (personagem1 < personagem2) {
            return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor`
        }
        return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor`
    }
}
