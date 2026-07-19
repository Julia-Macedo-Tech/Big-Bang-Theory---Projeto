var database = require("../database/config");

function cadastroPuzzle(movimentos, fkusuario) {

    var instrucaoSql = `INSERT INTO jogo_puzzle (qtd_movimentos, fk_usuario) VALUES (${movimentos}, ${fkusuario})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ranking() {

    var instrucaoSql = `select nome, foto_usuario, qtd_movimentos from usuario
join jogo_puzzle on fk_usuario = id_usuario
order by qtd_movimentos;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function vencedor(fkusuario) {

    var instrucaoSql = `select 
sum(case 
when vencedor = "Você" then 1
else 0 
end) as voce_ganhou,
sum(case
when vencedor = "Máquina" then 1
else 0 
end) as maquina_ganhou 
from jogo_luta
where fk_usuario = ${fkusuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function tabela(fkusuario) {

    var instrucaoSql = `select vencedor, DATE_FORMAT(cadastrado_em, '%d/%m/%Y %H:%i:%s') as cadastrado_em from jogo_luta where fk_usuario = ${fkusuario} order by cadastrado_em desc;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function selectPuzzle(fkusuario) {

    var instrucaoSql = `select * from jogo_puzzle where fk_usuario = ${fkusuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function updatePuzzle(movimentos, fkusuario) {

    var instrucaoSql = `update jogo_puzzle 
set cadastrado_em = now()
where fk_usuario = ${fkusuario};`;

    var instrucaoSql2 = `update jogo_puzzle 
set qtd_movimentos = ${movimentos}
where fk_usuario = ${fkusuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    database.executar(instrucaoSql);

    console.log("Executando a instrução SQL: \n" + instrucaoSql2);
    return database.executar(instrucaoSql2);
}

function cadastroLuta(vencedor, fkusuario) {

    var instrucaoSql = `insert into jogo_luta(vencedor, cadastrado_em, fk_usuario) values
("${vencedor}", now(), ${fkusuario});`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastroPuzzle,
    ranking,
    vencedor,
    tabela,
    selectPuzzle,
    updatePuzzle,
    cadastroLuta
}