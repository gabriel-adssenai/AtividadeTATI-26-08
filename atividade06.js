
class Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.tipoComunicacao = tipoComunicacao;
        this.consumoEnergia = consumoEnergia;
        this.ligado = false;
    }

    ligar() {
        this.ligado = true;
        console.log(`${this.nome} está ligado.`);
    }

    desligar() {
        this.ligado = false;
        console.log(`${this.nome} está desligado.`);
    }
}


class Fritadeira extends Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
        this.temperatura = 0; 
    }

    ajustarTemperatura(setpoint) {
        if (this.ligado) {
            this.temperatura = setpoint;
            console.log(`A temperatura da fritadeira foi ajustada para ${setpoint}°C.`);
        } else {
            console.log(`A fritadeira precisa estar ligada para ajustar a temperatura.`);
        }
    }
}


class Televisao extends Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }

    
}


class ArCondicionado extends Produto {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
        super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
        this.temperatura = 24;
    }

    ajustarTemperatura(setpoint) {
        if (this.ligado) {
            this.temperatura = setpoint;
            console.log(`A temperatura do ar-condicionado foi ajustada para ${setpoint}°C.`);
        } else {
            console.log(`O ar-condicionado precisa estar ligado para ajustar a temperatura.`);
        }
    }
}




const fritadeira = new Fritadeira('Fritadeira Airfryer', 10, 350, 'Digital', '1500W');
fritadeira.ligar();
fritadeira.ajustarTemperatura(180);
fritadeira.desligar();


const arCondicionado = new ArCondicionado('Ar Condicionado Split', 5, 2500, 'Remoto', '2000W');
arCondicionado.ligar();
arCondicionado.ajustarTemperatura(22);
arCondicionado.desligar();
