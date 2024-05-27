var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/publicarExibir", function (req, res) {
    avisoController.publicarExibir(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    // var idUsuario = req.params.idUsuario;
    avisoController.publicar(req, res);
});

router.put("/editar/:idPostagem", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idUsuario/:idPostagem", function (req, res) {
    var idUsuario = req.params.idUsuario;
    var idPostagem = req.params.idPostagem;
    avisoController.deletarInteracao(req, res, idUsuario, idPostagem);
});

// router.delete("/deletar/:idUsuario/:idPostagem", function (req, res) {
//     avisoController.deletarInteracao(idUsuario, idPostagem);
// });

module.exports = router;