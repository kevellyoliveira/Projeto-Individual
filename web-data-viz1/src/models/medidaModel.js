var database = require("../database/config");

function buscarUltimasMedidas() {

    var instrucaoSql = ` select COUNT(fkEstilo) as soma, e.nome  from Usuario
	right join Estilo as e
		on fkEstilo = idEstilo
	group by nome;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal() {
    var instrucaoSql = `select COUNT(fkEstilo) as soma, e.nome  from Usuario
	right join Estilo as e
		on fkEstilo = idEstilo
	group by nome;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
