"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("../formation-common/usuario");
class CadastroDeUsuarios {
    constructor() {
        this.usuarios = [];
    }
    cadastrar(usuario) {
        var result = null;
        if (this.cpfNaoCadastrado(usuario.cpf)) {
            result = new usuario_1.Usuario();
            result.copyFrom(usuario);
            this.usuarios.push(result);
        }
        return result;
    }
    cpfNaoCadastrado(cpf) {
        return !this.usuarios.find(a => a.cpf == cpf);
    }
    atualizar(usuario) {
        var result = this.usuarios.find(a => a.cpf == usuario.cpf);
        if (result)
            result.copyFrom(usuario);
        return result;
    }
    getUsuarios() {
        return this.usuarios;
    }
}
exports.CadastroDeUsuarios = CadastroDeUsuarios;
//# sourceMappingURL=cadastrodeusuarios.js.map