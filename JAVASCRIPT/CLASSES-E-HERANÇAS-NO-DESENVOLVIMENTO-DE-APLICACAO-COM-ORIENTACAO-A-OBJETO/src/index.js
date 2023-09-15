import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";




const magoCaio = new Mago('Caio', 4, 'fogo', 4, 3)
const magoLevy = new Mago('Levy', 8, 'gelo', 7, 10)

const arqueiroLucas = new Arqueiro('Lucas', 5, 3, 8)

const arqueiroMagoArt = new ArqueiroMago('Artur',  3, 'ar', 8, 9)


const personagens = [magoCaio, magoLevy, arqueiroLucas, arqueiroMagoArt]
new PersonagemView(personagens).render()
