import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../formation-common/usuario';
import { UsuarioService } from '../usuario.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  usuarios: Usuario[] = [];
  loginCpf: string = '';

  constructor(private usuarioService: UsuarioService, private snackBar: MatSnackBar, private router: Router) { }

  criarUsuario(u: Usuario): void {
    this.usuarioService.criar(u)
      .subscribe(
        ar => {
          if (ar) {
            // Deu tudo certo, usuário criado, vamos logar
            this.usuarios.push(ar);
            this.usuario = new Usuario();
            const snackBar = this.snackBar.open('Cadastro realizado com sucesso!', 'OK');
            this.usuario = new Usuario();
          } else {
            // CPF duplicado, mostra alerta
            const snackBar = this.snackBar.open('Não foi possível cadastrar. CPF duplicado.', 'OK');
          }
        },
        msg => { alert(msg.message); }
      );
  }

  fazerLogin() {
      const usuario = this.usuarios.find(usuario => usuario.cpf === this.loginCpf);
      if (!(usuario == null)) {
          // Vai logar
          localStorage.setItem('loginCpf', this.loginCpf);
          const snackBar = this.snackBar.open('Login realizado com sucesso!', 'OK');
          setTimeout(() => {
            document.location.assign(this.router.url);
              },
              1000);
      } else {
          // Mostra erro
          const snackBar = this.snackBar.open('CPF não encontrado.', 'OK');
      }
  }

  ngOnInit(): void {
    this.usuarioService.getUsuarios()
      .subscribe(
        as => { this.usuarios = as; },
        msg => { alert(msg.message); }
      );
  }

}
