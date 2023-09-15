import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";



/* Mago */
const magoCaio = new Mago('Caio', 4, 'fogo', 4, 3)
const magoLevy = new Mago('Levy', 8, 'gelo', 7, 10)
/* Arqueiro */
const arqueiroLucas = new Arqueiro('Lucas', 5, 3, 8)
/* Arqueiro Mago */
const arqueiroMagoArt = new ArqueiroMago('Artur', 3, 'ar', 8, 9)
/* Guerreiro */
const guerreiroAntonio = new Guerreiro('Antonio', 8, 'terra', 9, 8)

/* Lista de personagens */
const personagens = [magoCaio, magoLevy, arqueiroLucas, arqueiroMagoArt, guerreiroAntonio]

new PersonagemView(personagens).render()

console.log(Personagem.verificarVencedor(magoCaio, magoLevy))
