import { Musica } from './musica';
import { Usuario } from './usuario';

export class Formacao {
    musica: Musica;
    integrantes: String[]
    usuarios: Usuario[];
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.musica = new Musica();
      this.integrantes = [];
      this.usuarios = [];
    }
  
    clone(): Formacao {
      var formacao: Formacao = new Formacao();
      formacao.copyFrom(this);
      return formacao;
    }
  
    copyFrom(from: Formacao): void {
      this.musica = from.musica;
      this.integrantes = from.integrantes;
      this.usuarios = from.usuarios;
    }

  }