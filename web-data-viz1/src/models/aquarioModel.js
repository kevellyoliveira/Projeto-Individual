var database = require("../database/config");

function buscarAquariosPorEmpresa() {
  var instrucaoSql = `
  select email, senha from Usuario where email = '${email}' and senha = '${senha}';
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarAquarios() {
  var instrucaoSql = `
  select fkUsuario, fkPostagem, c.qtd_curtida, u.nome, u.email, u.foto, p.titulo, p.descricao, p.foto from Curtida as c 
	join Usuario as u
		on fkUsuario = idUsuario
	join Postagem as p
		on fkPostagem = idPostagem;
    `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(idPerfil, apelido, foto, descricao) {

  var instrucaoSql = `INSERT INTO (idPerfil, apelido, foto, descricao) perfil VALUES ('${idPerfil}', '${apelido}', '${foto}', '${descricao}'`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar,
  buscarAquarios
}
