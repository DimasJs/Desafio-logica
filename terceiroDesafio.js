class personagem {
    constructor(dano, tipo) {
        this.dano = dano;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {

            case "mago":
                ataque = "Magia";
                break;

            case "guerreiro":
                ataque = "Espada";
                break;

            case "paladino":
                ataque = "Punição Divina";
                break;

            case "arqueiro":
                ataque = "Flechas";
                break;

            default:
                ataque = "Pedra";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque} e causou ${this.dano} de dano.`);
    }
}

let personagens = [
    new personagem(98, "mago"),
    new personagem(95, "guerreiro"),
    new personagem(100, "paladino"),
    new personagem(80, "arqueiro")
];

let sorteio = Math.floor(Math.random() * personagens.length);

let atacante = personagens[sorteio];

atacante.atacar();