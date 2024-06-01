var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

// Importando o multer configurado
var upload = require('../config/configUpload');

router.get("/listar", upload.single('foto'), (req, res) => {
    avisoController.listar(req, res);
});

router.get("/publicarExibir", upload.single('foto'), (req, res) => {
    avisoController.publicarExibir(req, res);
});

router.get("/listar/:idUsuario", upload.single('foto'), (req, res) => {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", upload.single('foto'), (req, res) => {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", upload.single('foto'), (req, res) => {
    // var idUsuario = req.body.idUsuario;
    avisoController.publicar(req, res);
});

router.put("/editar/:idPostagem", upload.single('foto'), (req, res) => {
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