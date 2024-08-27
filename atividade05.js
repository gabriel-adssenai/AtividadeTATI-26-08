
class Maquinas {
    constructor(nome, qtdEixos, rotacoesPorMinuto, consumoEnergia) {
      this.nome = nome;
      this.qtdEixos = qtdEixos;
      this.rotacoesPorMinuto = rotacoesPorMinuto;
      this.consumoEnergia = consumoEnergia;
      this.ligada = false; 
    }
  
    ligar() {
      if (!this.ligada) {
        this.ligada = true;
        console.log(`${this.nome} está ligada.`);
      } else {
        console.log(`${this.nome} já está ligada.`);
      }
    }
  
    desligar() {
      if (this.ligada) {
        this.ligada = false;
        console.log(`${this.nome} está desligada.`);
      } else {
        console.log(`${this.nome} já está desligada.`);
      }
    }
  
    ajustarVelocidade(rotacoesPorMinuto) {
      if (this.ligada) {
        this.rotacoesPorMinuto = rotacoesPorMinuto;
        console.log(`A velocidade de rotação foi ajustada para ${this.rotacoesPorMinuto} RPM.`);
      } else {
        console.log(`Não é possível ajustar a velocidade. ${this.nome} está desligada.`);
      }
    }
  }
  
  
  class Furadeira extends Maquinas {
    constructor(nome, rotacoesPorMinuto, consumoEnergia) {
      super(nome, 1, rotacoesPorMinuto, consumoEnergia); 
    }
  }
  
  
  const minhaFuradeira = new Furadeira("Furadeira de Bancada", 3000, 1500);
  
  minhaFuradeira.ligar(); 
  minhaFuradeira.ajustarVelocidade(2000); 
  minhaFuradeira.desligar(); 
  