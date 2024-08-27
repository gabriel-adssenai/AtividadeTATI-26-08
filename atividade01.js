class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.motorLigado = false;
    }

    ligarMotor() {
        this.motorLigado = true;
        console.log(`O motor do ${this.modelo} foi ligado.`);
    }

    desligarMotor() {
        this.motorLigado = false;
        console.log(`O motor do ${this.modelo} foi desligado.`);
    }

    statusMotor() {
        if (this.motorLigado) {
            return `O motor do ${this.modelo} está ligado.`;
        } else {
            return `O motor do ${this.modelo} está desligado.`;
        }
    }
}


const carro1 = new Carro('Fiat', 'Toro', 2024);

// Ligando o motor
carro1.ligarMotor();
console.log(carro1.statusMotor());

// Desligando o motor
carro1.desligarMotor();
console.log(carro1.statusMotor());
