var database = require("../database/config");

function listar() {
    console.log("ACESSEI O postagem  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    select p.idPostagem as idPostagem, u.nome, u.email, p.foto, p.titulo, p.descricao from interacao
	join usuario as u
		on fkUsuario = idUsuario
	join postagem as p
		on fkPostagem = idPostagem;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
    select u.nome, u.email, p.foto, p.titulo, p.descricao from interacao
	join usuario as u
		on fkUsuario = u.idUsuario
	join postagem as p
		on fkPostagem = idPostagem
        WHERE p.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarInteracao(fkUsuario, fkPostagem) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
   INSERT INTO interacao (fkUsuario, fkPostagem) VALUES ('${fkUsuario}', '${fkPostagem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario() {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
    SELECT (titulo, descricao, foto) FROM postagem;
        `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}   

function publicar(titulo, descricao, foto) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, foto);
    var instrucaoSql = `
        INSERT INTO postagem (titulo, descricao, foto) VALUES ('${titulo}', '${descricao}', '${foto}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function editar(novaDescricao, novoTitulo, idPostagem) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, novoTitulo, idPostagem);
    var instrucaoSql = `
        UPDATE postagem SET descricao = '${novaDescricao}', titulo = '${novoTitulo}' WHERE idPostagem = '${idPostagem}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function deletarInteracao(fkUsuario, idPostagem) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idPostagem);
    var instrucaoSql = `
    DELETE FROM interacao WHERE fkUsuario = '${fkUsuario}' AND fkPostagem = '${idPostagem}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarPostagem(idPostagem) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", fkUsuario, fkPostagem);
    var instrucaoSql = `
    DELETE FROM postagem WHERE idPostagem = ${idPostagem};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    cadastrarInteracao,
    publicar,
    editar,
    deletarPostagem,
    deletarInteracao
}
