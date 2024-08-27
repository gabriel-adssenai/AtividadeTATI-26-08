
class Livros {
    constructor(nome, quantidade, preco, autor, numeroEdicao) {
      this.nome = nome;
      this.quantidade = quantidade;
      this.preco = preco;
      this.autor = autor;
      this.numeroEdicao = numeroEdicao;
    }
  
    emprestar() {
      if (this.quantidade > 0) {
        this.quantidade--;
        console.log(`O livro "${this.nome}" foi emprestado. Quantidade restante: ${this.quantidade}.`);
      } else {
        console.log(`O livro "${this.nome}" está indisponível para empréstimo.`);
      }
    }
  
    devolver() {
      this.quantidade++;
      console.log(`O livro "${this.nome}" foi devolvido. Quantidade disponível: ${this.quantidade}.`);
    }
  }
  
 
  const meuLivro = new Livros("Harrypotter", 3, 100, "Joanne jo Rowling", 6);
  
  meuLivro.emprestar(); 
  meuLivro.devolver();  
  