var database = require("../database/config");

function curtir(idPostagem, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario, idPostagem);
    var instrucaoSql = `
        INSERT INTO curtida (fkPostagem, fkUsuario) VALUES (${idPostagem}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar() {
    console.log("ACESSEI O postagem  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    SELECT p.idPostagem as idPostagem, u.nome, u.email, u.foto AS ftUsuario, p.titulo, p.foto AS ftPostagem, p.descricao, IFNULL(curtidas.qtd, 0) AS qtd
    FROM Postagem AS p
      LEFT JOIN (
        SELECT fkPostagem, COUNT(*) AS qtd FROM curtida
        GROUP BY fkPostagem
      ) AS curtidas ON p.idPostagem = curtidas.fkPostagem
      LEFT JOIN Usuario AS u ON p.fkUsuario = u.idUsuario
    ORDER BY p.idPostagem DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function pesquisarDescricao(texto) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
    select nome, email, u.foto, titulo, p.foto, p.descricao from Curtida as c
	join Usuario as u
		on fkUsuario = idUsuario
	join Postagem as p
		on fkPostagem = idPostagem;
        WHERE p.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarInteracao(fkUsuario, fkPostagem) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
   INSERT INTO curtida (fkUsuario, fkPostagem) VALUES ('${fkUsuario}', '${fkPostagem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
    select nome, email, u.foto as ftUsuario, titulo, p.foto as ftPostagem, p.descricao from Postagem as p
	join Usuario as u
		on fkUsuario = idUsuario
    where idUsuario = ${idUsuario}
     ORDER BY p.dtPostagem DESC;
            `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, descricao, foto, idUsuario) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, foto, idUsuario);
    var instrucaoSql = `
        INSERT INTO postagem (titulo, descricao, foto, fkUsuario) VALUES ('${titulo}', '${descricao}', '${foto}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function editar(novaDescricao, idPostagem) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idPostagem);
    var instrucaoSql = `
        UPDATE postagem SET descricao = '${novaDescricao}' WHERE idPostagem = '${idPostagem}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarCurtida(idUsuario, idPostagem) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idUsuario, idPostagem);
    var instrucaoSql = `
    DELETE FROM curtida WHERE fkPostagem = '${idPostagem}' AND fkUsuario = '${idUsuario}';
    `;

    // delete from postagem where idPostagem = '${idPostagem}';

    console.log("Executando as instruções SQL para deletar interações e postagem: \n" + deletarCurtida);
    return database.executar(instrucaoSql)
}

function VerCurtida(idPostagem, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verCurtir(): ", idUsuario, idPostagem);
    var instrucaoSql = `
    SELECT * FROM curtida 
          JOIN postagem ON curtida.fkPostagem = postagem.idPostagem
        JOIN usuario ON curtida.fkUsuario = usuario.idUsuario
    where curtida.fkUsuario = ${idUsuario} and curtida.fkPostagem = ${idPostagem};
    `;
    console.log(`Id Usuario: ${idUsuario}; Id Publicacao: ${idPostagem}`);
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


// deletar idPostagem e where idUsuario
function deletar(idPostagem, idUsuario) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idUsuario, idPostagem);
    var instrucaoSql = `
    DELETE FROM postagem WHERE idPostagem = '${idPostagem}' AND fkUsuario = '${idUsuario}';
    `;

    console.log("Executando as instruções SQL para deletar interações e postagem: \n" + deletar);
    return database.executar(instrucaoSql)
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    cadastrarInteracao,
    publicar,
    deletar,
    editar,
    deletarCurtida, 
    curtir,
    VerCurtida
}
