import { Personagem } from "./modules/personagem.js";

const personagemJose = {
    nome :'Jose' ,
    vida: 7,
    mana: 6,
    level: 3,
    tipo: 'Arqueiro',
}

const personagemAna = {
    nome :'Ana' ,
    vida: 7,
    mana: 6,
}
const personagemPedrinho = new Personagem()
personagemPedrinho.nome =' Pedrinho'
personagemPedrinho.mana = '12'
personagemPedrinho.vida = 7

console.log(personagemPedrinho)