export class Usuario {
    nome: string;
    cpf: string;
    participacoes: number;
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.nome = "";
      this.cpf = "";
      this.participacoes = 0;

    }
  
    clone(): Usuario {
      var usuario: Usuario = new Usuario();
      usuario.copyFrom(this);
      return usuario;
    }
  
    copyFrom(from: Usuario): void {
      this.nome = from.nome;
      this.cpf = from.cpf;
      this.participacoes = from.participacoes;
    }

  }