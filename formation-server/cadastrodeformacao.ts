import { Formacao } from '../formation-common/formacao';
import { Musica } from '../formation-common/musica';
import { Usuario } from '../formation-common/usuario';


export class CadastroDeFormacao {
  formacoes: Formacao[] = [];
  constructor(){
        let magnon = new Usuario(), erick = new Usuario(), marconi = new Usuario(), iris = new Usuario();
        magnon.cpf = '123';
        erick.cpf = '111';
        marconi.cpf = '234';
        iris.cpf = '456';
        magnon.nome = 'Magnon';
        erick.nome = 'Erick';
        marconi.nome = 'Marconi';
        iris.nome = 'Íris';

        let hip = new Musica();
        hip.titulo = 'HIP';
        hip.artista = 'Mamamoo';
        hip.integrantes = ['Hwasa', 'Solar', 'Moonbyul', 'Wheein'];

        let formacao = new Formacao();

        formacao.musica = hip;
        formacao.integrantes = hip.integrantes;
        formacao.usuarios[0] = erick;
        formacao.usuarios[1] = magnon;
        formacao.usuarios[2] = marconi;
        formacao.usuarios[3] = iris;
        this.formacoes.push(formacao);
  }

  cadastrar(formacao: Formacao): Formacao {
    var result = null;
    if (this.formacaoNaoCadastrada(formacao.musica.titulo, formacao.musica.artista)) {
      result = new Formacao();
      result.copyFrom(formacao);
      this.formacoes.push(result);
    }
    return result;
  }


  formacaoNaoCadastrada(titulo: string, artista: string): boolean {
    return !this.formacoes.find(a => a.musica.titulo == titulo && a.musica.artista == artista);
  }

  atualizar(formacao: Formacao): Formacao {
    var result: Formacao = this.formacoes.find(a => a.musica.titulo == formacao.musica.titulo && a.musica.artista == formacao.musica.artista);
    if (result) result.copyFrom(formacao);
    return result;
  }

  getFormacoes(): Formacao[] {
    return this.formacoes;
  }
}