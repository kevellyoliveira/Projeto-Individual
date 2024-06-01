var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
// router.post("/cadastrar", function (req, res) {
//     usuarioController.cadastrar(req, res);
// })

// Importando o multer configurado
var upload = require('../config/configUpload');

// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post("/cadastrar", upload.single('foto'), (req, res) => {
    usuarioController.cadastrar(req, res);
  });
  
router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get('/:idUsuario', upload.single('foto'), (req, res) => {
  usuarioController.buscarUsuarioPeloId(req, res);
});

module.exports = router;