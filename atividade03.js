
class Automovel {
    constructor(cor, modelo, tipoCombustivel, quantidadeRodas) {
        this.cor = cor;
        this.modelo = modelo;
        this.tipoCombustivel = tipoCombustivel;
        this.quantidadeRodas = quantidadeRodas;
    }

  
    exibeInformacoes() {
        console.log(`Modelo: ${this.modelo}, Cor: ${this.cor}, Combustível: ${this.tipoCombustivel}, Rodas: ${this.quantidadeRodas}`);
    }
}


class Carro extends Automovel {
    constructor(cor, modelo, tipoCombustivel) {
        super(cor, modelo, tipoCombustivel, 4); 
        this.motorLigado = false;
        this.vidroAberto = false;
    }

    ligarCarro() {
        this.motorLigado = true;
        console.log(`O carro ${this.modelo} foi ligado.`);
    }

    desligarCarro() {
        this.motorLigado = false;
        console.log(`O carro ${this.modelo} foi desligado.`);
    }

    abrirVidro() {
        this.vidroAberto = true;
        console.log(`O vidro do carro ${this.modelo} foi aberto.`);
    }

    descerVidro() {
        this.vidroAberto = false;
        console.log(`O vidro do carro ${this.modelo} foi fechado.`);
    }
}


class Moto extends Automovel {
    constructor(cor, modelo, tipoCombustivel) {
        super(cor, modelo, tipoCombustivel, 2); 
    }

   
}


class Caminhao extends Automovel {
    constructor(cor, modelo, tipoCombustivel) {
        super(cor, modelo, tipoCombustivel, 6); 
    }

    
}


const carro1 = new Carro('branco', '350z', 'Gasolina');


carro1.exibeInformacoes();


carro1.ligarCarro();
carro1.desligarCarro();


carro1.abrirVidro();
carro1.descerVidro();
