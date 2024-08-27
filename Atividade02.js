class Pessoa {
    constructor(nome, idade, profissao, salario) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.salario = salario;
    }

    exibeTrabalho(nomeEmpresa, tempoDeTrabalho) {
        console.log(`${this.nome} trabalha na empresa ${nomeEmpresa} há ${tempoDeTrabalho} anos.`);
    }
}


const pessoa1 = new Pessoa('jose', 55, 'Engenheiro', 10000);


pessoa1.exibeTrabalho('hellermann', 10);
