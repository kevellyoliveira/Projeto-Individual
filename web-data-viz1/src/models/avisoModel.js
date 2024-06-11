var database = require("../database/config");

function curtir(idPostagem, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario, idPostagem);
    var instrucaoSql = `
        INSERT INTO Curtida (fkPostagem, fkUsuario) VALUES (${idPostagem}, ${idUsuario});
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
        SELECT fkPostagem, COUNT(*) AS qtd FROM Curtida
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
   INSERT INTO Curtida (fkUsuario, fkPostagem) VALUES ('${fkUsuario}', '${fkPostagem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
    SELECT p.idPostagem as idPostagem, u.nome, u.email, u.foto AS ftUsuario, p.titulo, p.foto AS ftPostagem, p.descricao, IFNULL(curtidas.qtd, 0) AS qtd
    FROM Postagem AS p
      LEFT JOIN (
        SELECT fkPostagem, COUNT(*) AS qtd FROM Curtida
        GROUP BY fkPostagem
      ) AS curtidas ON p.idPostagem = curtidas.fkPostagem
      LEFT JOIN Usuario AS u ON p.fkUsuario = u.idUsuario
      where idUsuario = ${idUsuario}
    ORDER BY p.idPostagem DESC;
            `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, descricao, foto, idUsuario) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, foto, idUsuario);
    var instrucaoSql = `
        INSERT INTO Postagem (titulo, descricao, foto, fkUsuario) VALUES ('${titulo}', '${descricao}', '${foto}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function editar(novaDescricao, novoTitulo, idPostagem) {
    console.log("ACESSEI O postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, novoTitulo, idPostagem);
    var instrucaoSql = `
        UPDATE Postagem SET descricao = '${novaDescricao}', titulo = '${novoTitulo}' WHERE idPostagem = '${idPostagem}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function VerCurtida(idPostagem, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verCurtir(): ", idUsuario, idPostagem);
    var instrucaoSql = `
    SELECT * FROM Curtida 
    JOIN Postagem ON Curtida.fkPostagem = Postagem.idPostagem
    JOIN Usuario ON Curtida.fkUsuario = Usuario.idUsuario
    where Curtida.fkUsuario = ${idUsuario} and Curtida.fkPostagem = ${idPostagem};
    `;
    console.log(`Id Usuario: ${idUsuario}; Id Publicacao: ${idPostagem}`);
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarCurtida(idUsuario, idPostagem) {
    console.log("ACESSEI O Postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idUsuario, idPostagem);
    var instrucaoSql = `
    DELETE FROM Curtida WHERE fkPostagem = '${idPostagem}' AND fkUsuario = '${idUsuario}';
    `;

    console.log("Executando as instruções SQL para deletar interações e Postagem: \n" + deletarCurtida);
    return database.executar(instrucaoSql)
}

// deletar idPostagem e where idUsuario
function deletar(idPostagem, idUsuario) {
    // console.log("ACESSEI O Postagem MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idUsuario, idPostagem);
    var instrucaoSql2 = `
    DELETE FROM Curtida WHERE fkPostagem = '${idPostagem}';
    `;
    return database.executar(instrucaoSql2)
    .then(result => {
        console.log(result)
        var instrucaoSql = `
        DELETE FROM Postagem WHERE idPostagem = '${idPostagem}' AND fkUsuario = '${idUsuario}';
        `;
        console.log("Executando as instruções SQL para deletar interações e Postagem: \n" + deletar);
        return database.executar(instrucaoSql)
        }
        )
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
