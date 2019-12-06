import { Usuario } from '../formation-common/usuario';

export class CadastroDeUsuarios {
   usuarios: Usuario[] = [];

    cadastrar(usuario: Usuario): Usuario {
     var result = null;
     if (this.cpfNaoCadastrado(usuario.cpf)) {
       result = new Usuario();
       result.copyFrom(usuario);
       this.usuarios.push(result);
     }
     return result;
   }

    cpfNaoCadastrado(cpf: string): boolean {
      return !this.usuarios.find(a => a.cpf == cpf);
   }

    atualizar(usuario: Usuario): Usuario {
     var result: Usuario = this.usuarios.find(a => a.cpf == usuario.cpf);
     if (result) result.copyFrom(usuario);
     return result;
   }

    getUsuarios(): Usuario[] {
     return this.usuarios;
   }
}