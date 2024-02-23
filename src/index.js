import { Personagem } from "./personagem.js"
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./personagem-mago.js";
import { Arqueiro } from "./personagem-arqueiro.js";
import { ArqueiroMago } from "./arqueiro-mago.js";
import { Guerreiro } from "./guerreiro.js";

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)
const arqueiroBruno = new Arqueiro('Bruno', 7, 8)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8)
const guerreiraJorge = new Guerreiro('Jorge', 8)
const personagens = [magoAntonio, magaJulia, arqueiroBruno, arqueiroMagoChico, guerreiraJorge]

new PersonagemView(personagens).render();