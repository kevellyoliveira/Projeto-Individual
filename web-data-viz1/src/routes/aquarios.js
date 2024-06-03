var express = require("express");
var router = express.Router();

var aquarioController = require("../controllers/aquarioController");


// Importando o multer configurado
var upload = require('../config/configUpload');

router.get("/:idPerfil", function (req, res) {
  aquarioController.buscarAquariosPorEmpresa(req, res);
});

// router.delete("/deletar/:idUsuario/:idPostagem", upload.single('foto'), (req, res) => {
//   // var idUsuario = req.params.idUsuario;
//   // var idPostagem = req.params.idPostagem;
//   aquarioController.buscarAquarios(req, res);
// });

router.post("/listar/:idUsuario/", upload.single('foto'), (req, res) => {
  // var idUsuario = req.params.idUsuario;
  // var idPostagem = req.params.idPostagem;
  aquarioController.buscarAquarios(req, res);
});

router.post("/cadastrar", function (req, res) {
  aquarioController.cadastrar(req, res);
})

module.exports = router;