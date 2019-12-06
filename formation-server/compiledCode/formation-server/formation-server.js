"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cadastrodeusuarios_1 = require("./cadastrodeusuarios");
var taserver = express();
var cadastroU = new cadastrodeusuarios_1.CadastroDeUsuarios();
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
taserver.use(allowCrossDomain);
taserver.use(bodyParser.json());
// USUARIO ---------------------------------------------------------------------------
taserver.get('/usuarios', function (req, res) {
    res.send(JSON.stringify(cadastroU.getUsuarios()));
});
taserver.post('/usuario', function (req, res) {
    var usuario = req.body; //verificar se é mesmo Usuario!
    usuario = cadastroU.cadastrar(usuario);
    if (usuario) {
        res.send({ "success": "O usuário foi cadastrado com sucesso!!" });
    }
    else {
        res.send({ "failure": "O usuário não pode ser cadastrado :((" });
    }
});
taserver.put('/usuario', function (req, res) {
    var usuario = req.body;
    usuario = cadastroU.atualizar(usuario);
    if (usuario) {
        res.send({ "success": "O usuário foi atualizado com sucesso!!" });
    }
    else {
        res.send({ "failure": "O usuário não pode ser atualizado :((" });
    }
});
//-----------------------------------------------------------------------------------
var server = taserver.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
exports.server = server;
function closeServer() {
    server.close();
}
exports.closeServer = closeServer;
//# sourceMappingURL=formation-server.js.map