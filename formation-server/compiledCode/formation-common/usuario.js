"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor() {
        this.clean();
    }
    clean() {
        this.nome = "";
        this.cpf = "";
        this.participacoes = 0;
    }
    clone() {
        var usuario = new Usuario();
        usuario.copyFrom(this);
        return usuario;
    }
    copyFrom(from) {
        this.nome = from.nome;
        this.cpf = from.cpf;
        this.participacoes = from.participacoes;
    }
}
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.js.map