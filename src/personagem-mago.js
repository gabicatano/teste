import { Personagem } from "./personagem.js"

export class Mago extends Personagem {
    elementoMagico
    levelMagico
    inteligencia
    static tipo = 'Mago'
    static descricao = 'O mago é implacável!'

    constructor(nome, elementoMagico, levelMagico, inteligencia){
        super(nome)
        this.elemento = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
    }

    obterInsignia(){
        if(this.level >= 5 && this.inteligencia >= 5){
            return `Mestre do ${this.elemento}`
        } else {
            return super.obterInsignia()
        }
    }
}